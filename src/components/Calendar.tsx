// src/components/CalendarComponent.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { format } from 'date-fns';
import { id } from 'date-fns/locale'; // Import locale Indonesia

interface Event {
  id: number;
  title: string;
  holiday_date: Date;
  holiday_name: string;
}

const Calendars: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeStartDate, setActiveStartDate] = useState<Date>(new Date());

  const fetchEvents = useCallback(async () => {
    try {
        setEvents([])
      const month = format(activeStartDate, 'MM', { locale: id }); // Ganti locale ke id
      const year = format(activeStartDate, 'yyyy', { locale: id }); // Ganti locale ke id
      const response = await axios.get<Event[]>(`https://api-harilibur.vercel.app/api?month=${month}&year=${year}`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  }, [activeStartDate]);

  useEffect(() => {
    fetchEvents();
  }, [activeStartDate, fetchEvents]);

  // Function to determine the class name for each tile based on events
  const tileClassName = ({ date }: { date: Date }) => {
    const dayEvents = events.filter(event => {
      const eventDate = new Date(event.holiday_date);
      return eventDate.toDateString() === date.toDateString();
    });
    return dayEvents.length > 0 ? 'event-day' : ''; // Set background to red if there are events
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const changeDate = (value: Date) => {
    setDate(value);
  };

  const handleActiveDateChange = (newActiveStartDate: Date) => {
    console.log('Active Start Date: ', newActiveStartDate);
    setActiveStartDate(newActiveStartDate);
  };

  const formatMonthYear = (date: Date) => {
    return format(date, 'MMMM yyyy', { locale: id }); // Ganti locale ke id
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Calendar</h1>
      <div className={`relative w-full h-auto`}>
        <Calendar
          onChange={(value) => changeDate(value as Date)}
          value={date}
          className={`border-none rounded-lg shadow-md w-full bg-current ${events.length} ${events ? 'h-[450px]' : 'h-auto'}`}
          tileClassName={tileClassName}  // Apply tileClassName to set styles
          locale="id-ID" // Ganti locale ke id-ID
          navigationLabel={({ date }) => formatMonthYear(date)}
          onActiveStartDateChange={({ activeStartDate }) => handleActiveDateChange(activeStartDate as Date)}
        />
        <div className="mt-4 absolute top-[310px] left-1">
            <div className="flex flex-wrap">
                {events && events.map((b, index) => {
                    const eventDate = new Date(b.holiday_date);

                    // Check if the date is valid
                    if (isNaN(eventDate.getTime())) {
                    return ''; // or handle the invalid date case as needed
                    }

                    return (
                    <div
                        className={`${events.length} ${events.length > 4 ? 'w-1/2' : 'w-full'} p-1 text-[10px] ${index % 4 === 0  ? 'clear-left' : ''}`} // Ensure new row starts after every 4 items
                        key={`index-${index}`}
                    >
                        <div className="bg-white p-1 text-red-500">
                        <span className='float-left'>{format(eventDate, 'dd', { locale: id })}</span>
                        <span className='ml-2 overflow-wrap break-words whitespace-normal'>
                            {b.holiday_name}
                        </span>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Calendars;
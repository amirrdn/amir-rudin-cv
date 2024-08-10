"use client"; // Menandakan bahwa ini adalah Client Component

import React, { createContext, useContext, useState, FC, useEffect } from 'react';

// Definisikan tipe untuk ThemeContext
type ThemeContextType = {
  isLightTheme: boolean;
  setIsLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
  locale: string;
  setLocales: React.Dispatch<React.SetStateAction<string>>;
};

// Buat ThemeContext
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Buat ThemeProvider untuk membungkus aplikasi
export const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false); // Status tema
  const [locale, setLocales] = useState<string>('en'); // Status lokal
  useEffect(() => {
    // Ubah kelas body sesuai dengan tema
    document.body.className = isLightTheme ? 'bg-white text-gray-900' : 'bg-gray-900 text-white';
  }, [isLightTheme]);
  return (
    <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme, locale, setLocales }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook untuk menggunakan ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

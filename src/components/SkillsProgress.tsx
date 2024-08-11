import React, { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML & CSS', percentage: 85 },
  { name: 'Reactjs', percentage: 80 },
  { name: 'JavaScript', percentage: 98 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'Vuejs', percentage: 90 },
  { name: 'Laravel', percentage: 90 },
  { name: 'Flutter', percentage: 70 },
  { name: 'Tailwind', percentage: 90 },
  { name: 'Bootstrap', percentage: 90 },
];

const SkillsProgress: React.FC<{ isLightTheme: boolean }> = ({ isLightTheme }) => {
  const [animatedWidth, setAnimatedWidth] = useState<number[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    skills.forEach((skill, index) => {
      timeouts.push(
        setTimeout(() => {
          setAnimatedWidth(prev => {
            const newWidths = [...prev];
            newWidths[index] = skill.percentage;
            return newWidths;
          });
        }, index * 200)
      );
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="w-full pl-0 py-10 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      {skills.map((skill, index) => (
        <div className={`pt-${index !== 0 ? 6 : 0}`} key={skill.name}>
          <div className="flex items-end justify-between">
            <h4 className="font-body font-semibold uppercase">{skill.name}</h4>
            <h3 className="font-body text-3xl font-bold text-primary">{skill.percentage}%</h3>
          </div>
          <div className={`mt-2 h-3 w-full rounded-full bg-gray-200`}>
            <div
              className={`h-3 rounded-full ${isLightTheme ? 'bg-red-600' : 'bg-yellow-500'} transition-all duration-1000 ease-out`}
              style={{ width: `${animatedWidth[index] || 0}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;

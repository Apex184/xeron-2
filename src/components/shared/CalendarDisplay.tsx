import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

const CalendarDisplay: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 60000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  const formatTime = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    }).format(date);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10 dark:border-gray-700/20">
      <div className="flex items-center space-x-2">
        <Calendar size={18} className="text-blue-500 dark:text-blue-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{formatDate(dateTime)}</span>
      </div>
      <div className="h-3 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block" />
      <div className="flex items-center space-x-2">
        <Clock size={18} className="text-blue-500 dark:text-blue-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{formatTime(dateTime)}</span>
      </div>
    </div>
  );
};

export default CalendarDisplay;
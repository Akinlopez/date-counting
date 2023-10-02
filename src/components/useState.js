import { useState } from 'react';

const useDate = (initialDate) => {
  const [date, setDate] = useState(new Date(initialDate));

  const addDays = (days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    setDate(newDate);
  };

  const addMonths = (months) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + months);
    setDate(newDate);
  };

  return {
    date,
    addDays,
    addMonths,
  };
};

export default useDate;

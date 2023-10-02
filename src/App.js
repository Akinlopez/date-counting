import "./App.css";
import "./index.css";
import React from 'react';
import useDate from './components/useState'; // Import the custom hook

const MyComponent = () => {
  const { date, addDays, addMonths } = useDate(new Date());

  return (
    <div>
      <p>Current Date: {date.toDateString()}</p>
      <button onClick={() => addDays(1)}>Add 1 Day</button>
      <button onClick={() => addMonths(1)}>Add 1 Month</button>
    </div>
  );
};

export default MyComponent;




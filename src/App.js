import "./index.css";
import React from 'react';
import useDate from './components/useState'; // Import the custom hook

const MyComponent = () => {
  const { date, addDays, addMonths } = useDate(new Date());

  return (
    <div className="container">
      <p className='current-date'>Current Date: {date.toDateString()}</p>
      <button className="bttn" onClick={() => addDays(1)}>Add 1 Day</button>
      <button className="bttn" onClick={() => addMonths(1)}>Add 1 Month</button>
    </div>
  );
};

export default MyComponent;




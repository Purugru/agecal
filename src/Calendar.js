import React from 'react';

const Calendar = ({ dob, setDob }) => {
  return (
    <input
      type="date"
      value={dob}
      onChange={(e) => setDob(e.target.value)}
    />
  );
};

export default Calendar;

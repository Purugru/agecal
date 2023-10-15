import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setAge(age);
    }
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{ 
          width: '200px',
          height: '40px'
        }}
      />
      <br />
      <br />
      <button 
        style={{ 
          color: 'white',
          backgroundColor: '#007bff',
          borderRadius: '5px',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      {age !== null && <p style={{fontSize: '1.2em'}}>You are {age} years old</p>}
    </div>
  );
};

export default AgeCalculator;
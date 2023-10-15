import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button style={{ color: 'blue' }} onClick={onClick}>
      Calculate Age
    </button>
  );
};

export default Button;

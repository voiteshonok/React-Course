// Row.js
import React from 'react';
import './Row.css'; // Import the CSS file

export const Row = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="cell">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Row;

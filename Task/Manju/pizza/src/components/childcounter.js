import React from 'react';

const ChildComponent = ({ onUpdate }) => {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Buttons that trigger the callback function with specific values */}
      <button onClick={() => onUpdate(1)}>Increase</button>
      <button onClick={() => onUpdate(-1)}>Decrease</button>
    </div>
  );
};

export default ChildComponent;

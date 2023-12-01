import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  // Callback function to update the counter
  const updateCounter = (value) => {
    setCounter(counter + value);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Counter: {counter}</h2>
      {/* Pass the callback function as a prop to the child component */}
      <ChildComponent onUpdate={updateCounter} />
    </div>
  );
};

export default ParentComponent;

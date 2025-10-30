import React, { useState } from 'react';

function StateHandel() {
  const [counter, setCounter] = useState(20);
  function click()
  {
    setCounter(counter+1);
  }
  
  return (
    <div>
      <div>count is {counter}</div>
      <button onClick={click}>click</button>
    </div>
  );
}

export default StateHandel;

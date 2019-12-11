import React, { useState } from 'react';
import Child from './Child.jsx';

const App = (props)=>{
  const [count, setCount] = useState({current: 0, previous: 0});
  return (
    <div>
      <p>The current count is: {count.current}</p>
      <button onClick={()=>{
        useState(setCount({
          previous: count.current,
          current: (count.current + 1)
        }));
        }}>Click me!</button>
      <Child count={count}/>
    </div>
  );

};

export default App;
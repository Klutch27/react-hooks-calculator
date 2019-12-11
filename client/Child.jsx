import React from 'react';

const Child = (props)=>{
return (
  <p>The previous count was: {props.count.previous}</p>
);
};

export default Child;
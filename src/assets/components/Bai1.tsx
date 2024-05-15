import React from 'react'

export default function Bai1() {
    const handleChange = () => {
        console.log('Clicked');
      };
    
  return (
    <div>
      <button onClick={handleChange}>Click me</button>
    </div>
  );
};
    
 

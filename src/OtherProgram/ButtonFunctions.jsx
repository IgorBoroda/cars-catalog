import React from 'react';
import './ButtonFunctions.css';

export const ButtonFunctions = ({ toggleMarginPosition, increaseMargin, decreaseMargin }) => {
  return (
    <div className="button-container">
      <button className="btn btn-toggle" onClick={toggleMarginPosition}>Переключить отступ</button>
      <button className="btn btn-increase" onClick={increaseMargin}>+</button>
      <button className="btn btn-decrease" onClick={decreaseMargin}>-</button>
    </div>
  );
};






















// import React, { useState } from 'react';

// export const ButtonFunctions = () => {
//   const [marginTop, setMarginTop] = useState(50);
//   const [marginBottom, setMarginBottom] = useState(50);

//   const toggleMargin = () => {
//     setMarginTop(marginBottom);
//     setMarginBottom(marginTop);
//   };

//   const increaseMargin = () => {
//     setMarginTop(prev => prev + 10);
//     setMarginBottom(prev => prev + 10);
//   };

//   const decreaseMargin = () => {
//     setMarginTop(prev => Math.max(prev - 10, 0));
//     setMarginBottom(prev => Math.max(prev - 10, 0));
//   };

//   return (
//     <div>
//       <button onClick={toggleMargin}>Переключить отступ</button>
//       <button onClick={increaseMargin}>+</button>
//       <button onClick={decreaseMargin}>-</button>
//     </div>
//   );
// };

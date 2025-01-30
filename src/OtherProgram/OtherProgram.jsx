import React, { useState } from 'react';
import { ButtonFunctions } from './ButtonFunctions';

const OtherProgram = () => {
  const [margin, setMargin] = useState(50); // Управляемый отступ
  const [isTop, setIsTop] = useState(true); // Флаг, где будет отступ (сверху или снизу)

  const toggleMarginPosition = () => setIsTop(prev => !prev);
  const increaseMargin = () => setMargin(prev => prev + 10);
  const decreaseMargin = () => setMargin(prev => Math.max(prev - 10, 0));

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>Другой компонент</h2>
      <p>Этот компонент добавлен из другого курса.</p>

      {/* Обертка с динамическим отступом */}
      <div
        style={{
          [isTop ? 'marginTop' : 'marginBottom']: `${margin}px`,
          transition: 'all 0.3s ease', // Плавное изменение отступа
          backgroundColor: '#ddd',
          padding: '20px'
        }}
      >
        <h3>Контент с отступами</h3>
      </div>

      {/* Передаем функции управления отступами в ButtonFunctions */}
      <ButtonFunctions
        toggleMarginPosition={toggleMarginPosition}
        increaseMargin={increaseMargin}
        decreaseMargin={decreaseMargin}
      />
    </div>
  );
};

export default OtherProgram;






















// import React, { useState } from 'react';
// import { ButtonFunctions } from './ButtonFunctions';

// const OtherProgram = () => {
//   const [margin, setMargin] = useState(50); // Управляемый отступ
//   const [isTop, setIsTop] = useState(true); // Флаг, где будет отступ (сверху или снизу)

//   const toggleMarginPosition = () => setIsTop(!isTop);
//   const increaseMargin = () => setMargin(prev => prev + 10);
//   const decreaseMargin = () => setMargin(prev => Math.max(prev - 10, 0));

//   return (
//     <div style={{ [isTop ? 'marginTop' : 'marginBottom']: `${margin}px` }}>
//       <h2>Другой компонент</h2>
//       <p>Этот компонент добавлен из другого курса.</p>

//       {/* Передаем управление состоянием в ButtonFunctions */}
//       <ButtonFunctions
//         toggleMarginPosition={toggleMarginPosition}
//         increaseMargin={increaseMargin}
//         decreaseMargin={decreaseMargin}
//       />
//     </div>
//   );
// };

// export default OtherProgram;










// import React from 'react';
// import { ButtonFunctions } from './ButtonFunctions'; // Импортируем функции с кнопками

// const OtherProgram = () => {
//   return (
//     <div>
//       <h2>Другой компонент</h2>
//       <p>Этот компонент добавлен из другого курса.</p>

//       {/* Используем компонент с кнопками */}
//       <ButtonFunctions />
//     </div>
//   );
// };

// export default OtherProgram;

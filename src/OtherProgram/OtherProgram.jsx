import React, { useState } from 'react';
import { ButtonFunctions } from './ButtonFunctions';

const OtherProgram = () => {
  const [margin, setMargin] = useState(50); // Управляемый отступ
  const [isTop, setIsTop] = useState(true); // Флаг, где будет отступ (сверху или снизу)

  const toggleMarginPosition = () => setIsTop(prev => !prev);
  const increaseMargin = () => setMargin(prev => prev + 10);
  const decreaseMargin = () => setMargin(prev => Math.max(prev - 10, 0));

  return (
    <div style={{ padding: '30px', backgroundColor: '#f0f0f0', color: 'black'}}>
      <h5>Другой компонент</h5>
      <p>Этот компонент добавлен из другого курса.</p>
      <Item2/>
      {
      /* Обертка с динамическим отступом */
      }
      <div
        style={{
          [isTop ? 'marginTop' : 'marginBottom']: `${margin}px`,
          transition: 'all 0.3s ease', // Плавное изменение отступа
          backgroundColor: '#ddd',
          padding: '40px'
        }}
      >
        <h5>Контент с отступами</h5>
      </div>

      {
       /*Передаем функции управления отступами в ButtonFunctions */
      }
      <ButtonFunctions
        toggleMarginPosition={toggleMarginPosition}
        increaseMargin={increaseMargin}
        decreaseMargin={decreaseMargin}
      />
    </div>
  );

  //============ просто примеры

  //1. Как изменить элемент в массиве?

  //Пример: заменим элемент по индексу
const [numbers, setNumbers] = useState([10, 20, 30, 40]);

const updateNumber = (index, newValue) => {
  setNumbers(prev => prev.map((num, i) => (i === index ? newValue : num)));
};
//-----
//Пример: изменить конкретное число (например, заменить 20 на 25)
setNumbers(prev => prev.map(num => (num === 20 ? 25 : num)));

//2. Как изменить объект в массиве?
const [cars, setCars] = useState([
  { id: 1, name: 'BMW', price: 10000 },
  { id: 2, name: 'Tesla', price: 20000 },
]);

const updateCarPrice = (id, newPrice) => {
  setCars(prev => prev.map(car => 
    car.id === id ? { ...car, price: newPrice } : car
  ));
};
//3. Как добавить элемент в объект?
const [car, setCar] = useState({ name: 'BMW', price: 10000 });

const addColor = () => {
  setCar(prev => ({ ...prev, color: 'red' }));
};

//===================================
//Изменить элемент в массиве	
setNumbers(prev => prev.map((num, i) => (i === index ? newValue : num)))
//Изменить объект в массиве	
setCars(prev => prev.map(car => car.id === id ? { ...car, price: newPrice } : car))
//Добавить элемент в объект	
setCar(prev => ({ ...prev, color: 'red' }))
//добавить обьект в массив
setCars(prev=>([...prev,{id:prev.length+1,...data}]));
//===================================
};
//============
export default OtherProgram;

import styles from '../components/screens/home/Home.module.css';

function Item2() {
  //===============================================
const [numbers, setNumbers] = useState([10, 20, 30, 40]);
const [numbers2, setNumbers2] = useState(0);
const updateNumber = (index, newValue) => {
setNumbers(prev => prev.map((num, i) => (i === index ? newValue : num)));
setNumbers2(newValue);
};

  //===============================================
  return (
    <div className={styles.item}>
    <div>
      <h1>{numbers.join(" ")}</h1>
      <h1>{numbers2}</h1>
      <button onClick={() => updateNumber(0, 140)}>Обновить число</button>
    </div>








      <div style={{ fontSize: "10px" }}>
        <h1>Привет</h1>
      </div>
    </div>
  );
}























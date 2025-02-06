import { useEffect, useState } from 'react';
import CarItem from './car-item/Caritem.jsx';
import CreateCarForm from './create-car-form/CreateCarForm.jsx';
import { CarService } from '../../../services/car.service.js';

function Home() {

  const [cars_, setCars] = useState([]);
  useEffect(()=>{
    const fetcData = async ()=>{
      const response = await CarService.getAll();
      setCars(response);
    }
    fetcData();
  },[])


  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars_?.length ? 
          cars_?.map(car => <CarItem key={car.id} car={car} />) : 
          <p>There are no cars</p>
        }
      </div>
    </div>
  );
}

export default Home;



//==========================================================================
// import {useState} from 'react'
// import CarItem from './car-item/Caritem.jsx'
// import {cars as carsData} from './cars.data.js'
// import CreateCarForm from './create-car-form/CreateCarForm.jsx'
// function Home() {
//   const [cars,setCars]=useState(carsData);
//     console.log(cars);
//   return (
//           <div>
//           <h1> Cars catalog</h1>
//           <CreateCarForm setCars={setCars}/>
//           <div>
//             {//- скобки для java script
//             cars.length ? cars.map(car_ell =>(<CarItem key= {car_ell.id} car= {car_ell}/>)) : <p>There are no cars</p>
//             }
//           </div>
//           </div>
//            )
// }
// export default Home

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  //   useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Правильный путь к файлу в папке public
  //       const response = await fetch('/db.json');
  //       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  //       const data = await response.json();
  //       setCars(data.cars); // Обращаемся к свойству "cars" JSON-объекта
  //     } catch (error) {
  //       console.error('Ошибка загрузки данных:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);


  //   const [cars_, setCars] = useState([]);
  // useEffect(()=>{
  //   const fetcData = async ()=>{
  //     const response = await fetch('http://localhost:3000/cars');
  //     const data = await response.json();
  //     setCars(data);
  //   }
  //   fetcData();
  // },[])
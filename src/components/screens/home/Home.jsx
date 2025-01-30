import {useState} from 'react'
import CarItem from './car-item/Caritem.jsx'
import {cars} from './cars.data.js'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'
function Home() {
  const [cars_,setCars]=useState(cars);
    //console.log(cars_);
  return (
          <div>
          <h1> Cars catalog</h1>
          <CreateCarForm setCars={setCars}/>
          <div>
            {//- скобки для java script
            cars_.length ? cars_.map(car_ell =>(<CarItem key= {car_ell.id} car= {car_ell}/>)) : <p>There are no cars</p>
            }
          </div>
          </div>
           )
}
export default Home

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




















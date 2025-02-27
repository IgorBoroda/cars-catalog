import { useContext, useEffect, useStae } from 'react';
import CarItem from './car-item/Caritem.jsx';
import CreateCarForm from './create-car-form/CreateCarForm.jsx';
import { CarService } from '../../../services/car.service.js';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider.jsx';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: CarService.getAll,
  });

  const nav = useNavigate();
  const { user, setUser } = useContext(AuthContext); // ✅ useContext вызывается всегда

  return (
    <div>
      {isLoading ? ( // ✅ Теперь условие в JSX, а не перед хуками
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <Link to="/test">Test JSX</Link>
          </div>
          <br />
          <div>
            <Link to="/test2">Test HUCK</Link>
          </div>
          <br />
          <h1 className="text-2xl">Cars catalog</h1>
          {user ? (
            <>
              <h2 className="text-xl m-2">Welcome, {user.name}!</h2>
              <button
                className="bg-[#f3f0f0] text-black mx-2 p-1 rounded-md"
                onClick={() => setUser(null)}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="bg-[#fff] text-black p-1 mx-2 rounded-md"
              onClick={() => setUser({ name: "Igor" })}
            >
              Login
            </button>
          )}

          <button
            className="bg-[#fff] text-black p-1 rounded-md px-3"
            onClick={() => nav("/car/2")}
          >
            go
          </button>
          <CreateCarForm />
          <div>
            {data?.length ? (
              data.map((car) => <CarItem key={car.id} car={car} />)
            ) : (
              <p>There are no cars</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Home
//========================================================================== 1 
// import {useState} from 'react'
// import CarItem from './car-item/Caritem.jsx'
// import {cars as carsData} from './cars.data.js'
// import CreateCarForm from './create-car-form/CreateCarForm.jsx'
// function Home() {
//   const [cars,setCars]=useState(carsData);
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




  //========================================================================== 2 (до react query)
// import { useContext, useEffect, useState } from 'react';
// import CarItem from './car-item/Caritem.jsx';
// import CreateCarForm from './create-car-form/CreateCarForm.jsx';
// import { CarService } from '../../../services/car.service.js';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../providers/AuthProvider.jsx';
// import { Link } from 'react-router-dom';


// function Home() {
//   const [cars_, setCars] = useState([]);
//   useEffect(()=>{
//     const fetcData = async ()=>{
//       const data = await CarService.getAll();
//       setCars(data);
//     }
//     fetcData();
//   },[])

//  const nav = useNavigate();

// const {user,setUser}= useContext(AuthContext);

//   return (
//     <div className=''>

//     <div>
//      <Link to='/test'> Test JSX</Link>
//     </div>
//     <br></br>
//      <div>
//      <Link to='/test2'> Test HUCK</Link>
//      </div>

//     <br></br>
    
//       <h1 className='text-2xl'>Cars catalog</h1>
//       {
//         user ? (
//           <>
//           <h2 className='text-xl m-2'>Welcom,{user.name}! </h2>
//           <button className='bg-[#f3f0f0] text-black mx-2 p-1 rounded-md' onClick={()=>setUser(null)}>Logout</button>
//           </>
//         ):(
//           <button className='bg-[#fff] text-black p-1 mx-2 rounded-md' onClick={()=>setUser({name:'Igor'})}>Login</button>
//         )
//       }


//       <button className='bg-[#fff] text-black p-1 rounded-md px-3' onClick={()=>nav('/car/2')}>go</button>
//       <CreateCarForm setCars={setCars} />
//       <div>
//         {cars_?.length ? 
//           cars_?.map(car => <CarItem key={car.id} car={car} />) : 
//           <p>There are no cars</p>
//         }
//       </div>
//     </div>  
//   );
// }

// export default Home;
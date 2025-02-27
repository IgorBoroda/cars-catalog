import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import CarItem from "../home/car-item/Caritem"
import { CarService } from '../../../services/car.service.js';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider.jsx";
import { withAuth } from "../../../HOC/withAuth.jsx";

const CarDetail = ()=>{
const {id} = useParams()
const [car,setCar] = useState([0])

   useEffect(()=>{
    if(!id)return;
     const fetchData = async ()=>{
       const data = await CarService.getById(id);
       setCar(data);
     }
     fetchData();
   },[id])
   if (!car?.name)return <p>Loading...</p>

  return <div>
         <Link 
         className='btn'
         type="button" 
         to='/'>Back</Link>
         <CarItem car = {car} isDetale = {true}/>
         </div>
}
export default withAuth(CarDetail);


  
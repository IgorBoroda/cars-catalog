import { useEffect, useState } from "react"
import { CarService } from "../src/services/car.service";
import { useQuery } from "@tanstack/react-query";

export const Test3 = () =>{




  const [cars, setCars] = useState([]);
 
  //========== вариант №1
  useEffect(()=>{
    const fetcData2 = async ()=>{
      const data2 = await CarService.getAll();
      setCars(data2);
    }
    fetcData2();
  },[])
}
//========== вариант №2
useEffect(()=>{
  CarService.getAll()
  .then((cars)=>{
    setCars(cars);
  }).catch((error)=>{
    console.error(error);
  });
 
},[])

//========== вариант №3 useQuery #1
const {data,isLoading,isError} = useQuery({
 queryKey: ["wqeee"],
 queryFn: CarService.getAll,
}
)
//useQuery #2
const {data_,isLoading_,isError_} = useQuery(["ewdw"],()=>CarService.getAll());
 
















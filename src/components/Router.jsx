import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import CarDetail from "./screens/car-detail/CarDetail";
import { Test } from "../../public/Test";
import { Test2 } from "../../public/Test2";
const Router = ()=>{
  return (
         <BrowserRouter>
          <Routes>
           <Route element = {<Home/>} path= '/'/>
           <Route element = {<CarDetail/>} path= '/car/:id'/>
           <Route path = '*' element = {<div>Not found </div>}/>

           <Route element = {<Test/>} path= '/test'/>
           <Route element = {<Test2/>} path= '/test2'/>
          </Routes>
         </BrowserRouter>
         )
}
export default Router


//программируй!))
import { useState } from 'react'
import styles from './CreateCarForm.module.css'
const clearData={name:'',price:'',image:'',};

const CreateCarForm = ({setCars}) => {
  const [data,setData] = useState(
    {
      name:'',
      price:'',
      image:'',
    })

  const createCar = e => {
    e.preventDefault()
    setCars(prev=>[...prev,{id:prev.lenght+1,...data}])
            setData(clearData);
           }
  return (
    <form 
    className={styles.form}> 

      <input 
        placeholder='Name' 
        onChange={e => setData(prev=>({...prev,name:e.target.value}))}
        value={data.name}
      />

      <input 
        placeholder='Price' 
        onChange={e => setData(prev=>({...prev,price:e.target.value}))}
        value={data.price}
        type='number'
      />
      <input 
      placeholder='Image' 
      onChange={e => setData(prev=>({...prev,image:e.target.value}))}
      value={data.image}
      />
        
      <button 
      className='btn'
      type="button" 
      onClick={e => createCar(e)}>Create</button>


    </form>
  )
} // - конец функции

export default CreateCarForm





//======================================================
// import { useState } from 'react'
// import styles from './CreateCarForm.module.css'
// const clearData={name:'',price:'',image:'',};
// const CreateCarForm = ({setCars}) => {
//   const [data,setData] = useState(
//     {
//       name:'',
//       price:'',
//       image:'',
//     })

//   const createCar = e => {
//     e.preventDefault()
//     setCars(prev=>[
//               {
//                 id:prev.lenght+1,
//                 ...data
//               }, 
//               ...prev]
//             )
//             setData(clearData);
//            }
//   return (
//     <form 
//     className={styles.form}> 

//       <input 
//         placeholder='Name' 
//         onChange={e => setData(prev=>({...prev,name:e.target.value}))}
//         value={data.name}
//       />

//       <input 
//         placeholder='Price' 
//         onChange={e => setData(prev=>({...prev,price:e.target.value}))}
//         value={data.price}
//       />
//       <input 
//       placeholder='Image' 
//       onChange={e => setData(prev=>({...prev,image:e.target.value}))}
//       value={data.image}
//       />
        
//       <button 
//       className='btn'
//       type="button" 
//       onClick={e => createCar(e)}>Create</button>


//     </form>
//   )
// } // - конец функции

// export default CreateCarForm

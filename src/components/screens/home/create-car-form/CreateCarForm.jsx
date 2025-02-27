import styles from './CreateCarForm.module.css';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CarService } from '../../../../services/car.service';

const CreateCarForm = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const queryClient = useQueryClient();

const { mutate } = useMutation({
  mutationFn: CarService.create, // Отправляем данные на сервер (POST /cars)
  onSuccess: () => {
    queryClient.invalidateQueries(["cars"]); // Обновляем список машин в Home.jsx
    reset(); // Очищаем форму после успешного добавления
  }
});

const createCar = (data) => {
  mutate(data); // Запускаем запрос на добавление машины
};

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}> 
      <input 
        {...register('name', { required: 'Name is required' })}
        placeholder='Name' 
        className='rounded-md text-black border border-black focus:ring-2 focus:ring-white transition-all duration-200'
      />
      {errors?.name && <p className='text-[#ec4c4c]'>{errors.name.message}</p>}

      <input 
        type="number"
        {...register('price', { 
          required: 'Price is required',
          valueAsNumber: true, 
          min: { value: 1, message: 'Price must be at least 1' }
        })}  
        placeholder='Price' 
        className='rounded-md text-black border border-black focus:ring-2 focus:ring-white transition-all duration-200'
      />
      {errors?.price && <p className="text-[#ec4c4c]">{errors.price.message}</p>}

      <input 
        {...register('image', { 
          required: 'Image is required',
          pattern: { 
          value: /^(https?:\/\/.+)/i,
          message: 'Enter a valid image URL (http)'
          }
        })}
        placeholder="Image" 
        className="rounded-md text-black border border-black focus:ring-2 focus:ring-white transition-all duration-200"
      />
      {errors?.image && <p className="text-[#ec4c4c]">{errors.image.message}</p>}

      <button 
        className="py-2 px-4 bg-blue-500 text-white rounded-md"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;







//====================================================== 1
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
//     setCars(prev=>[{id:prev.length+1,...data},...prev])
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
//         type='number'
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


//==================================================//



//==================================================// 2

// import styles from './CreateCarForm.module.css';
// import { useForm } from 'react-hook-form'; // ✅ Импорт из правильной библиотеки

// const CreateCarForm = ({ setCars }) => {

//   const { register, reset, handleSubmit, formState: {errors}} = useForm({
//   mode: 'onChange'
//   });

//   const createCar = (data) => {
//     setCars((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
//     reset(); // ✅ Очистка формы после отправки
//   };
   
//  console.log(errors)

//   return (

//     <form className={styles.form} onSubmit={handleSubmit(createCar)}> 


//       <input 
//         {...register('name', { 
//         required:'Name is requaired' })}
//         placeholder='Name' 
//         className='rounded-md text-black focus:ring-2 focus:ring-white transition-all duration-[200ms] ease-linear border border-black'
//       />
//       {errors?.name?.message && <p className= 'text-[#ec4c4c]'>Name is required</p>}


//       <input 
//       type="number"
//         {...register('price', { 
//         required: 'Price is requaired',
//         valueAsNumber: true, 
//         min: { value: 1, message: 'Price must be at least 1' },
//         validate: (value) => !isNaN(value) || 'Price must be a number'
//         })} // ✅ исправлено (price с маленькой буквы)
         
//         placeholder='Price' 
//          className='rounded-md text-black focus:ring-2 focus:ring-white transition-all duration-[200ms] ease-linear border border-black'
//       />
//       {errors?.price && <p className="text-[#ec4c4c]">{errors.price.message}</p>}


//       <input 
//       {...register('image', { 
//       required: 'Image is required', // ✅ Исправил "requaired"
//       pattern: { 
//       value: /(https?:\/\/.*\.)/i,
//       message: 'Enter a valid image URL (png, jpg, jpeg, gif, webp, svg)'
//       }
//       })}
//       placeholder="Image" 
//       className="rounded-md text-black focus:ring-2 focus:ring-white transition-all duration-[200ms] ease-linear border border-black"
//       />
//       {errors?.image && <p className="text-[#ec4c4c]">{errors.image.message}</p>}


//       <button 
//         className='flex justify-center items-center py-[6px] px-[30px] bg-white rounded-md text-black hover:px-[70px] hover:bg-[#9e3535] transition-all ease-linear duration-300'
//         type="submit" // ✅ Должен быть type="submit", иначе форма не отправляется
//       >
//         Create
//       </button>
//     </form>
//   );
// };

// export default CreateCarForm;
//==================================================//



//==================================================// до useMutation 

// import styles from './CreateCarForm.module.css';
// import { useForm } from 'react-hook-form'; // ✅ Импорт из правильной библиотеки

// const CreateCarForm = () => {

//   const { register, reset, handleSubmit, formState: {errors}} = useForm({
//   mode: 'onChange'
//   });

//   const createCar = (data) => {
//     // setCars((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
//     // reset(); // ✅ Очистка формы после отправки
//   };


//   return (

//     <form className={styles.form} onSubmit={handleSubmit(createCar)}> 


//       <input 
//         {...register('name', { 
//         required:'Name is requaired' })}
//         placeholder='Name' 
//         className='rounded-md text-black focus:ring-2 focus:ring-white transition-all duration-[200ms] ease-linear border border-black'
//       />
//       {errors?.name?.message && <p className= 'text-[#ec4c4c]'>Name is required</p>}


//       <input 
//       type="number"
//         {...register('price', { 
//         required: 'Price is requaired',
//         valueAsNumber: true, 
//         min: { value: 1, message: 'Price must be at least 1' },
//         validate: (value) => !isNaN(value) || 'Price must be a number'
//         })} // ✅ исправлено (price с маленькой буквы)
         
//         placeholder='Price' 
//          className='rounded-md text-black focus:ring-2 focus:ring-white transition-all duration-[200ms] ease-linear border border-black'
//       />
//       {errors?.price && <p className="text-[#ec4c4c]">{errors.price.message}</p>}


//       <input 
//       {...register('image', { 
//       required: 'Image is required', // ✅ Исправил "requaired"
//       pattern: { 
//       value: /(https?:\/\/.*\.)/i,
//       message: 'Enter a valid image URL (png, jpg, jpeg, gif, webp, svg)'
//       }
//       })}
//       placeholder="Image" 
//       className="rounded-md text-black focus:ring-2 focus:ring-white transition-all duration-[200ms] ease-linear border border-black"
//       />
//       {errors?.image && <p className="text-[#ec4c4c]">{errors.image.message}</p>}


//       <button 
//       className={`py-2 px-4 ${Object.keys(errors).length ? 'bg-gray-400' : 'bg-blue-500'}`}
//       type="submit"
//       disabled={Object.keys(errors).length > 0}
//       >
//       Create
//       </button>
//     </form>
//   );
// };

// export default CreateCarForm;

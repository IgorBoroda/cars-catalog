// import styles from '../Home.module.css'

// function CarItem({car}){
//   return (
//   <div className={styles.item}>
//     <div className={styles.image}
//     style={{backgroundImage: `url(${car.image})`}}/>
//     <div className={styles.info}>
//     <h2>{car.name}</h2>
//     <p>{new Intl.NumberFormat('ru-RU', {style: 'currency',currency: 'USD',}).format(car.price)} </p>
//     <button>Read more</button>
//     </div>
//   </div>
//   )// return
// }
// export default CarItem



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// прошлые версии
// function CarItem({car}){
//   return (
//   <div key={car.id} className={styles.item}>
//     <div className={styles.image}
//     style={{backgroundImage: `url(${car.image})`}}/>
//     <div className={styles.info}>
//     <h2>{car.name}</h2>
//     <p>{new Intl.NumberFormat('ru-RU', {style: 'currency',currency: 'USD',}).format(car.price)} </p>
//     <button>Read more</button>
//     </div>
//   </div>
//   )// return
// }
// /export default CarItem

//=====================================================

import styles from '../Home.module.css';
import { Link } from "react-router-dom"
import {VideoPlayer2} from '../Player';
import Price from './Price';

function CarItem({car,isDetale = false}){
  return(
    <div className={styles.item}>
      <div className={styles.image} style={{backgroundImage:`url(${car.image})`}}/>
        {isDetale && <VideoPlayer2 src={car.video} />}
       <div className={styles.info}>
        <h2>{car.name}</h2>
        <Price price={car.price}/>
         <Link className=' items-center py-[6px] px-[30px] bg-white rounded-md text-black  hover:bg-[#9e3535] transition-all ease-linear duration-300' to={`/car/${car.id}`}>Read more</Link>
       </div>
    </div>
    
  )
}
export default CarItem;




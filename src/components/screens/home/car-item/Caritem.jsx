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
function CarItem({car}){
  return(
    <div className={styles.item}>
      <div className={styles.image} style={{backgroundImage:`url(${car.image})`}}/>
       <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>{new Intl.NumberFormat('ru-RU',{style:'currency',currency:'USD'}).format(car.price)}</p>
        <button>Read More</button>
       </div>
    </div>
    
  )
}
export default CarItem;




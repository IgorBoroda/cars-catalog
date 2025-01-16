import styles from './Home.module.css'
import {cars} from './cars.data.js'




function Home() {
  return (
          <div>
          <h1> Cars catalog</h1>
          <div>
            {cars.length ? cars.map(car =>(
            <div key={car.id} className={styles.item}>
              <div className={styles.image}
              style={{backgroundImage: `url(${car.imege})`}}/>
              <div className={styles.info}>
              <h2>{car.name}</h2>
              <p>{new Intl.NumberFormat(
                'ru-RU',
                {
                 style: 'currency',
                 currency: 'USD',
                }
              ).format(car.price)} </p>
              <button>Read more</button>
              </div>
            </div>
            )) : <p>There are no cars</p>
          }
          </div>
          </div>
           )
}

export default Home




//33:15
// function Home() {
//   return (
//           <div>
//           <h1> Cars catalog</h1>
//           <div>
//             {cars.length ? cars.map(car =>(
//             <div key={car.id} className={styles.item}>
//               <div className={styles.image}
//               style={{backgroundImage: `url(${car.imege})`}}/>
//               <div className={styles.info}>
//               <h2>{car.name}</h2>
//               <p>{new Intl.NumberFormat(
//                 'ru-RU',
//                 {
//                  style: 'currency',
//                  currency: 'USD',
//                 }
//               ).format(car.price)} </p>
//               <button>Read more</button>
//               </div>
//             </div>
//             )) : <p>There are no cars</p>
//           }
//           </div>
//           </div>
//            )
// }

// export default Home



//---------------
// 28:15
// import styles from './Home.module.css'
// function Home() {
//   //const [count, setCount] = useState(0)
//   return (
// <div>
//   <h1> Cars catalog</h1>
//   <div>
//     <div className={styles.item}>
//       <div 
//       className={styles.image}
//       style={{
//         backgroundImage: 'url(/1.jpg)'
//       }}/>
//       <div className={styles.info}>
//       <h2>Car 1</h2>
//       <p>$ 100 000</p>
//       <button>Read more</button>
//       </div>
//     </div>
//   </div>
// </div>)
// }

// export default Home

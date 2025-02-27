import { Link } from "react-router-dom"


export const Test=()=>{

//-------------------------------
const name = "Иван";
function Greeting() {
  return <h1>Привет, мир!</h1>;
}

function Greeting2(props) {
  return <h1>Привет, {props.name}!</h1>;
}

function Greeting3({props}) {
  return <h1>Привет медвед, {props}!</h1>;
}

function UserCard({ name, age }) {
  return <p>Имя: {name}, Возраст: {age}</p>;
}

const user = {
  name: "Игорь",
  age: 28,
};


const products = [1, 2, 3]; // Это массив
const name2 = "Андрей"; // Это строка


function ProductList(products) { 
  console.log(products); // Это объект { products: [...] }
}

function ProductList2({ products }) { 
  console.log(products); // Это массив! ✅
}


const users = ["Андрей", "Мария", "Игорь"];
function UserList({users}){
  return(
    <ul>
      {
        users.map((user,index)=>(
          <li key = {index}>{user}</li>
        ))
      }
    </ul>
  )
}

const products2 = [
  { id: 1, title: "Ноутбук", price: 50000 },
  { id: 2, title: "Смартфон", price: 30000 },
  { id: 3, title: "Наушники", price: 5000 }
];

function ProductList({products}){
    if (products.length === 0) {
    return <p>Товары не найдены 😔</p>;
  }
  return (
    <ul>
      {
        products.map((product) =>(
         <li key = {product.id}>{product.title}-{product.price}$</li>
        ))
      }
    </ul>
  )
}




function ClickButton() {
  function handleClick() {
    alert("Кнопка нажата!");
  }

  return <button onClick={handleClick}>Нажми меня</button>;
}

function UserButton({ name }) {
  function sayHello(userName) {
    alert(`Привет, ${userName}!`);
  }

  return <button onClick={() => sayHello(name)}>Поздороваться</button>;
}


function InputField() {
  function handleChange(event) {
    console.log("Введён текст:", event.target.value);
  }

  return <input type="text" onChange={handleChange} />;
}



function ClickEvent() {
  function handleClick(event) {
    console.log(event); // Посмотрим объект события в консоли
  }

  return <button onClick={handleClick}>Кликни меня</button>;
}









//-------------------------------

  return (
    <div>




    <div>
    <Link to='/'> Home </Link>
    </div>

    <br></br>

    <div className="container">Текст</div>
   {/* <h1>{element}</h1> */}
   <h1>Привет, {name}!</h1>

    <Greeting/>
    <Greeting2 name="Андрей" />
    <Greeting2 name="Мария" />
    <Greeting3 props = "fdffd" />

    <UserCard name="Андрей_" age={25} />
    <UserCard name="Мария_" age={30} />

    <br></br>

    <UserCard {...user} />

    <ProductList2 products = {name2}/>
    <br></br>
    <UserList users={users} />
    <br></br>
    <ProductList products={products2} />
    <br></br>
    <br></br>
    <ClickButton />
    <br></br>
    <br></br>
    <UserButton name="Андрей" />
    <br></br>
    <br></br>
    <InputField />
    <br></br>
    <br></br> 
   <ClickEvent />
   <br></br>
   <br></br>
   <div onMouseMove={(event) => console.log(`X: ${event.clientX}, Y: ${event.clientY}`)}>Наведи курсор</div>
   <br></br>
   <br></br>









    </div>
  )
}



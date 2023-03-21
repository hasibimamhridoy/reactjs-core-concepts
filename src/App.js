import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const ProArray = [
  {
    name: 'IPhone 10',
    desc: 'IPhone 10 is good enough',
    price: 500
  },
  {
    name: 'IPhone 12',
    desc: 'IPhone 12 is good enough',
    price: 700
  },
  {
    name: 'Samsung 12',
    desc: 'sa,simnfsf 12 is good enough',
    price: 900
  },
  {
    name: 'IPhone 15',
    desc: 'IPhone 14 is good enough',
    price: 7100
  },
  {
    name: 'IPhone 12',
    desc: 'IPhone 12 is good enough',
    price: 700
  },
  {
    name: 'IPhone 12',
    desc: 'IPhone 12 is good enough',
    price: 700
  },
  {
    name: 'IPhone 12',
    desc: 'IPhone 12 is good enough',
    price: 700
  },
]

// function App() {

//   const [count,setCount] = useState(0)
//   const Increse = ()=> setCount(count+1)

//   return (
//     <div className='App'>
//       {
//         ProArray.map(product => {
//           return (
//             <div className="App">
//               <Products name={product.name} desc={product.desc} price={product.price}></Products>
//             </div>
//           )
//         })
//       }
      

//       <div>
//         <p>Count Number : {count} </p>
//         <button onClick={Increse}>Increse</button>
//         <button>Decrese</button>
//       </div>

//     </div>


//   );
// }

// const Products = ({ name, desc, price }) => {

//   return (
//     <div>
//       <p>Product Name: {name} </p>
//       <p>Product Description: {desc}</p>
//       <p>Product Price: {price} </p>
//       <button>Add to cart</button>
//     </div>
//   )
// }


function App() {

  const [users,setUser] = useState([])
  
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUser(data))
  },[])

  return (
    <div className='App'>
      {users.map(user => <User name={user.name} Email={user.email} ></User>)}
    </div>

  );
}

function User({name,Email}){
  return(
    <div>
      <h1>User Name : {name}</h1>
      <h1>User Email : {Email}</h1>
    </div>
  )
}



export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 

 return ( 

   <div> 

     <h1>Welcome to the Counter App</h1> 

     <Counter title="My Counter" /> 

   </div> 

 ); 

} 

 

function Counter({title}) { 

 // You'll need to add state and props here 
 const [count, setCount] = useState(0);
 

 const handleIncrease = () => { 

   // This function should increase the count 
   setCount(count + 1);


 }; 


 const handleReset = () => {

   // This function should reset the count to 0
   setCount(0);

 };

 return ( 

   <div> 

     <h2>{title}</h2> 

     <p>Count: {count}</p> 

     <button onClick={handleIncrease}>Increase</button> 
      <button onClick={handleReset}>Reset</button>  
   </div> 

 ); 

} 

 

export default App; 
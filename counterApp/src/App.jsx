import { useState } from 'react'
import './App.css'

function Counter() {
  
     let [counter, setCounter] = useState(5)

  //  let counter = 10;

   const addValue = ()  => {
    if(counter < 20) {
    setCounter(counter + 1); 
    console.log("Added Successfully", counter);
    } else {
      alert("Counter value is not above 20, please decrease counter value")
    }
    
   }

   const removeValue = () => {
    if(counter > 0) {
    setCounter(counter - 1);
    console.log("Remove Successfully" , counter);
    } else {
      alert("Counter value is not less than 0, please increase counter value")
    }
    
   }

  return (
    <>
      <h1> First Step With React</h1>
      <h2>Counter value : {counter}</h2>
   
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

     <p>Change value all places where counter variable use like here: {counter}</p>

    </>
  )
}


export default Counter

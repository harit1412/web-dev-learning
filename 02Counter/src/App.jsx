
import { useState } from 'react';
import './App.css'




function App() {
  let [counter,setCounter] = useState(0);

  const addValue = ()=>{
    // counter+=1; 
    setCounter((counter)=>(counter+1)) 
    setCounter((counter)=>(counter+1)) 
    setCounter((counter)=>(counter+1)) 
    setCounter((counter)=>(counter+1)) 
    // console.log(counter);
  }  
  const decreament = ()=>{
    setCounter(()=>{
      if(counter==0)return counter;
      else return (counter-1);
    });
  }

  return (
  <>
  <h1>Hello , It's Harit</h1>
  <h2>count : {counter}</h2>
  <button id="counter_button" onClick={addValue}>Increament</button>
  <button id="decr_button" onClick={decreament}> Decreament </button>
  </>
  )
}

export default App

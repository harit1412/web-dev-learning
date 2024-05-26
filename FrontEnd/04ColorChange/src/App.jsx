import { useState } from 'react'
import './App.css'

function App() {
 let [col , setCol] = useState("olive")
  // console.log(col);
  function changecolor(newcol){
    setCol((col)=>(newcol))
  }
  return (
    
    <div className='w-full h-screen duration-200' style={{backgroundColor : col}}>
      
      <div
className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

<div className="flex flex-wrap justify-center
gap-3 shadow-lg
_bg-white px-3 py-2 rounded-3xl">

    <button onClick={()=>changecolor("red")} style={{backgroundColor:"red"}}>Red</button>
    <button onClick={()=>changecolor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
    <button onClick={()=>changecolor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick={()=>changecolor("white")} style={{backgroundColor:"white"}}>White</button>
    </div>
    </div>
    </div>
  )
}

export default App

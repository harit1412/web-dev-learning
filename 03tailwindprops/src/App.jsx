import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const user = {
    username : "Harit" ,
    
    btntext :"visit me" ,
    
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi placeat soluta maxime esse eius debitis non rerum cumque cum fugiat at vitae beatae, temporibus, molestiae quisquam, consequuntur neque tempora itaque?"

  }
  return (
   <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    
    <Card user = {user}/>
    <Card/>

   </>
  
  )
}

export default App

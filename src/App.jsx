import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color }}></div>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-2 shadow-xl bg-white px-2 py-3 rounded-2xl'> 
      <button onClick={ () => setColor("Red")} className='outline-none px-4 py-1 shadow-lg rounded-lg' style={{backgroundColor: 'red'}}>Red</button>
      <button onClick={ () => setColor("blue")}  className='outline-none px-4 py-1 shadow-lg rounded-lg' style={{backgroundColor: 'blue'}}>Blue</button>
      <button onClick={ () => setColor("Pink")}  className='outline-none px-4 py-1 shadow-lg rounded-lg' style={{backgroundColor: 'Pink'}}>Pink</button>
      <button onClick={ () => setColor("Orange")}  className='outline-none px-4 py-1 shadow-lg rounded-lg' style={{backgroundColor: 'Orange'}}>Orange</button>
      
      </div>
     </div>
    </>
  )
}

export default App

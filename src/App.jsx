import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-screen h-screen duration-200' style={{background:color}}>
        <div className='fixed flex p bottom-12 flex-wrap justify-center inset-x-0 px-2'>
          <div className='bg-white flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl px-3 py-2'>
            <button onClick={()=>{setColor("Red")}} className='outline rounded-full text-white px-4 py-1 shadow-lg cursor-pointer' style={{backgroundColor: "Red"}}>Red</button>
            <button onClick={()=>{setColor("Black")}} className='outline rounded-full text-white px-4 py-1 shadow-lg cursor-pointer' style={{backgroundColor: "Black"}}>Black</button>
            <button onClick={()=>{setColor("Blue")}} className='outline rounded-full text-white px-4 py-1 shadow-lg cursor-pointer' style={{backgroundColor: "Blue"}}>Blue</button>
            <button onClick={()=>{setColor("Purple")}} className='outline rounded-full text-white px-4 py-1 shadow-lg cursor-pointer' style={{backgroundColor: "Purple"}}>Purple</button>
            <button onClick={()=>{setColor("Green")}} className='outline rounded-full text-white px-4 py-1 shadow-lg cursor-pointer' style={{backgroundColor: "Green"}}>Green</button>
            <button onClick={()=>{setColor("White")}} className='outline rounded-full text-black px-4 py-1 shadow-lg cursor-pointer' style={{backgroundColor: "White"}}>White</button>
            <button onClick={()=>{setColor("Yellow")}} className='outline-yellow-50 rounded-full text-black px-4 py-1 shadow-lg cursor-pointer' style={{backgroundColor: "Yellow"}}>Yellow</button>
            <button onClick={()=>{setColor("Olive")}} className='outline-olive rounded-full text-black px-4 py-1 shadow-lg cursor-pointer' style={{backgroundColor: "Olive"}}>Olive</button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App

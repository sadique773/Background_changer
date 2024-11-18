import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (

    <>
    <div className='w-full h-screen flex justify-center items-end duration-1000'
    style={{backgroundColor:color}}>
    <div className='bg-slate-400 rounded-2xl flex flex-wrap justify-center items-center px-2 w-auto mb-8 gap-1 p-2'>
      <button className='bg-red-800 px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all' onClick={()=>setcolor("red")}>Red</button>

      <button className='bg-green-800 px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all'onClick={()=>setcolor("green")}>Green</button>

      <button className='bg-blue-800 px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all' onClick={()=>setcolor("blue")}>Blue</button>

      <button className='bg-olive px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all'onClick={()=>setcolor("olive")}>Olive</button>

      <button className='bg-gray-500 px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all' onClick={()=>setcolor("gray")}>Gray</button>

      <button className='bg-yellow-500 px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all' onClick={()=>setcolor("yellow")}>Yellow</button>

      <button className='bg-pink-500 px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all' onClick={()=>setcolor("pink")}>Pink</button>

      <button className='bg-purple-800 px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all' onClick={()=>setcolor("purple")}>Purple</button>

      <button className='bg-lavender text-black px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all' onClick={()=>setcolor("lavender")}>Lavender</button>

      <button className='bg-white text-black px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all' onClick={()=>setcolor("white")}>White</button>

      <button className='bg-black text-white px-3 rounded-xl font-serif m-1 py-0.5) hover:scale-105 transform transition-all' onClick={()=>setcolor("black")}>Black</button>

    </div>
    </div>

  </>
  
  )
}

export default App

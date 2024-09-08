import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (

      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center gap-1 shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg0" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg0" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'gray'}} onClick={()=>setColor("gray")}>Gray</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg00 text-black" style={{backgroundColor:'yellow'}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lgxt-black border-black" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lgxt-white" style={{backgroundColor:'black'}} onClick={()=>setColor("black")}>Black</button>
        </div>
       </div>
      </div>
  
  )
}

export default App

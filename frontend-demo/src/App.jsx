import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const handleButton=()=>{

    alert("Build run Successfully");
  }

  return (
    <>
      <button onClick={handleButton} 
      style={{border:"1px solid blue", color:"blue"}}
      >Click Here</button>
    </>
  )
}

export default App

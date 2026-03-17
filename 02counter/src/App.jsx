import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
const  [counter,setCounter]=useState(15)
const removeValue=()=>{
  
  if(counter!=0){
setCounter(counter-1)
  } else{
      console.log("It's invalid")
    }
  // console.log(counter)
}

//  let counter=15
const addValue=()=>{
    /*counter=counter+1
    setCounter(counter)*/
    if(counter!=20){
    setCounter(counter+1)}
    else{
      console.log("It's invalid")
    }
    //  console.log(counter)
 }
  return (
    <>
      <h1>Chai or react </h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}
      >Add Value{counter}</button>
      <br></br>
      <button onClick={removeValue}
      >Remove value{counter}</button>
      <p
      >footer: {counter}</p>
    </>
  )
}

export default App

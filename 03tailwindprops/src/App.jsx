import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myobj={
  "name":"Devendra",
  "age":18
}
let myarr=[1,2,3,4,5]
  return (
    <>
   <h1 className='bg-green-400 text-black p-4  rounded-x '>Tailwind test</h1>
<Card name="Devendra" newarr={myarr} /> 
{/* don't take any object in array and object form  */}
<Card newobj={myobj}/> {/*maens simple object or array  doge to nhi lega but alag se object or array  bna kr doge to le lega */}
    {/* if we want then pass a variable name like direct "{name}", then we not need to write props on anywhere ...means after this we written only name in curly brackets, not props.name .*/}
    {/* <Card username="Hello cuttie" btnText="Click Me"/> {aslo handle it in Card.jsx propery and also give default value } */}
    </>
  )
}

export default App

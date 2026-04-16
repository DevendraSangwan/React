import { useState, useCallback,useEffect ,useRef} from 'react'
// useCallback memoizes (remembers) a function
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[btnText,setBtnText]=useState("Copy")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (characterAllowed) {
      str += "!@#$%^&*-_+=[]{}~`"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed,setPassword])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,3)
window.navigator.clipboard.writeText(password)
setBtnText("Copied")
},[password])
 
useEffect(()=>{
  setBtnText("Copy")
},[password])

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,characterAllowed,passwordGenerator])
 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">    
    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold text-center mb-6">
        Password Generator
      </h1>
      <div className="flex rounded-xl overflow-hidden mb-4 bg-white/20">
        <input
          type="text"
          value={password}
          className="w-full py-2 px-3 bg-transparent text-white placeholder-gray-300 outline-none"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-500 hover:bg-blue-600 px-4 transition font-semibold"
        >
          {btnText}
        </button>
      </div>
      <div className="mb-4">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <p className="text-lr mt-1  text-center">
          Length: <span className="font-bold">{length}</span>
        </p>
      </div>
      
     <div className="flex  justify-between text-base mt-4">
  <label className="flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      checked={numberAllowed}
      onChange={() => setNumberAllowed((prev) => !prev)}
      className="w-5 h-5 accent-blue-500 cursor-pointer"
    />
    <span className="text-lg font-medium">Numbers</span>
  </label>

  <label className="flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      checked={characterAllowed}
      onChange={() => setCharacterAllowed((prev) => !prev)}
      className="w-5 h-5 accent-blue-500 cursor-pointer"
    />
    <span className="text-lg font-medium">Symbols</span>
  </label>
</div>
    </div>
  </div>
)
}

export default App
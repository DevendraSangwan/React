import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex justify-center items-center "
    style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}>

      <div className="w-full max-w-md backdrop-blur-lg shadow-2xl rounded-2xl p-6 border-2 border-white">

        <h1 className="text-2xl font-bold text-white text-center ">
           Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
        >

          {/* FROM */}
          <div className="mb-4 text-black font-semibold">
            <InputBox 
              label="From"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* SWAP BUTTON */}
          <div className="flex justify-center my-3">
            <button
              type="button"
              onClick={swap}
              className="bg-white hover:bg-slate-300 text-black font-semibold px-4 py-1 rounded-lg shadow-md transition duration-200"
            >
              Swap
            </button>
          </div>

          {/* TO */}
          <div className="mb-4 text-black font-semibold">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-10 bg-white hover:bg-slate-300 text-black py-3 rounded-xl font-semibold shadow-lg transition duration-200"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>

        </form>

        {/* RESULT */}
        {convertedAmount > 0 && (
          <p className="text-center text-white mt-4 text-lg font-medium">
            {amount} {from.toUpperCase()} ={" "}
            <span className="font-bold">
              {convertedAmount.toFixed(2)} {to.toUpperCase()}
            </span>
          </p>
        )}

      </div>
    </div>
  )
}

export default App
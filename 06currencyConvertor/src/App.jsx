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
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">

      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-6 border border-white/30">

        <h1 className="text-2xl font-bold text-white text-center mb-6">
          💱 Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
        >

          {/* FROM */}
          <div className="mb-4">
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
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1 rounded-lg shadow-md transition duration-200"
            >
              🔄 Swap
            </button>
          </div>

          {/* TO */}
          <div className="mb-4">
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
            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-semibold shadow-lg transition duration-200"
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
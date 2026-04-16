import React ,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className="",}){
        const amountInputId=useId() //do not usedId to generate keys in a list.
    return(
<div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>InputBox
    <div className='w-1/2 '>
    <label  htmlFor={amountInputId}
    className='text-black mb-2 ml-10 text-2xl w-full font-semibold inline-block'>
    {label}
    </label>
     <input 
     id={amountInputId}
     className=' text-black text-xl font-semibold outline-none w-full bg-transparent py-1.5'
     type="number"
     placeholder='Amount'
     disabled={amountDisable}
     value={amount}
     onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
     />
    </div>
    <div className='w-1/2 flex  flex-wrap justify-end text-right '>
    <p className=" mb-2 w-full text-black font-semibold"> Currency Type </p>
    <select
     className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
     value={selectCurrency}
     onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
     disabled={currencyDisable}
     >

       {currencyOption.map((currency)=>(
        <option key={currency} value={currency}>
            {currency}
        </option>     //remaiber the key in react  when using loop
       ))}
    </select>
    </div>
</div>
    );
}

export default InputBox;

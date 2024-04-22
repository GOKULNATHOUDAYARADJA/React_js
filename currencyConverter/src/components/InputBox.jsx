// useId is the one of most used hook how it work mean 
//when we work with the lable and input we for link the "htmlFor" so we use this hook we achive the auto generate name
import React, {useId} from 'react'
// to create the function use the crfc its used to creact react function at shortcut depending upon the extension
function InputBox({
    label, 
     amount,  // to hold the amount
    onAmountChange, // this is method any change in anount this method is make a process and handile it
    onCurrencyChange, // this is method any change in currency eg. inr, usd this method is handle it
    currencyOptions = [],// initially we want to get option of the currency by using array we get the all type of currency
    selectedCurrency = "usd", // by default we want currency so use this variable and store the selected currency
    amountDisabled = false,// this is used to enable and disable the currency set option because of we using component re-use so we make initialy enable  incause we want mean disable
    currrencyDisabled = false,// this is same feature like above feature 
    className = "", //this is common thing its used to allow the user to access all the feature
}) {

    const id = useId()
  return (
    // in this className area we can pass the java script also its make a user friendly
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>
            <label htmlFor={id}  className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
            id={id}
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            // the disabled attribute is used to user can not able to intract with the input box 
            disabled={amountDisabled}
            value={amount}
            //onChange is the event change handler its works like any change in value its automatically detech and run the function 
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
             />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select 
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectedCurrency}
        onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
        disabled={currrencyDisabled}
        >
            // below the process we use the Map in select tag in option tag we pass the key and value the upendchild (currency is only show the name of the currency)
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox
  
// Note:
// when use the curly brase then only function get return
// otherwise you use the normal bracket its not return .
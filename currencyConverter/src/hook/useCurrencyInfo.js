// this is custom hook... actually the hook is simply classic java script
// and also the hook is just a function  

import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data
    
}


export default useCurrencyInfo;
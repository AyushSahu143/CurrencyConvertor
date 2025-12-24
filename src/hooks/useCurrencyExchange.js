import {useState, useEffect} from 'react'

export default function useCurrencyExchange(currency) {

    const [data, setData] = useState({})

    useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${currency}`)
    .then((res) => res.json())
    .then((res) => {console.log(res.rates); setData(res.rates);})
    }, [currency])

    return data 
}


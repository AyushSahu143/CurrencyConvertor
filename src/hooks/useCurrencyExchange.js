import {useState, useEffect} from 'react'

export default function useCurrencyExchange(from) {

    const [data, setData] = useState({})

    useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${from}`)
    .then((res) => res.json())
    .then((res) => {console.log(res.rates); setData(res.rates);})
    }, [from])
    return data  
}


import { useState } from 'react'
import './App.css'
import InputBox from './components/'
import useCurrencyExchange from './hooks/useCurrencyExchange'

const bg = 'https://images.pexels.com/photos/13321545/pexels-photo-13321545.jpeg'

function App() {
  const [currency, setCurrency] = useState("USD")
  useCurrencyExchange(currency)
  

  return (
    <>
    <div className='w-full h-screen flex flex-col items-center bg-no-repeat bg-cover bg-center"' style={{ backgroundImage: `url(${bg})` }}>
     <h1 className='text-white text-3xl py-4 px-2 inline-block bg-black rounded-3xl mt-4 opacity-60'>Currency Convertor</h1>
     
      <InputBox />

     <button type="button">swap</button>

     <InputBox />
    </div>
    </>
  )
}

export default App

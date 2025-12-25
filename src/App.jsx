import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyExchange from "./hooks/useCurrencyExchange";

const bg =
  "https://images.pexels.com/photos/13321545/pexels-photo-13321545.jpeg";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyExchange(from);

 const options = [from, ...Object.keys(currencyInfo)]


  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return
    setConvertedAmount(amount * currencyInfo[to])
  };

  return (
    <>
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-white text-3xl py-4 px-2 inline-block bg-black rounded-3xl mt-4 opacity-60">
          Currency Convertor
        </h1>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  currencyOptions={options}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount} 
                  amountDisable={true}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

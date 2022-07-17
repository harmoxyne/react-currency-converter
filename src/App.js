import './App.css';
import {getData} from 'currency-data';
import CurrencySelector from './CurrencySelector';
import {useEffect, useState} from 'react';
import AmountInput from './AmountInput';
import convertCurrencies from './convertCurrencies';

function App() {
  const [currencyFrom, setCurrencyFrom] = useState('EUR');
  const [amountFrom, setAmountFrom] = useState('?');
  const [currencyTo, setCurrencyTo] = useState('USD');
  const [resultAmount, setResultAmount] = useState('?');
  useEffect(() => {
    const convert = async () => {
      convertCurrencies(currencyFrom, currencyTo, amountFrom, setResultAmount);
    };

    convert();
  }, [currencyFrom, currencyTo, amountFrom]);

  return (
      <div className="App">
        <header className="App-header">
          <p>
            You can
            change {amountFrom} {currencyFrom} for {resultAmount} {currencyTo}
          </p>
          <CurrencySelector currencies={getData()}
                            onChange={setCurrencyFrom}/>
          <AmountInput onChange={setAmountFrom}/>
          <CurrencySelector currencies={getData()}
                            onChange={setCurrencyTo}/>
        </header>
      </div>
  );
}

export default App;

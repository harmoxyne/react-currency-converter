import React, {useEffect, useState} from 'react';
import ConversionResult from '../molecules/ConversionResult';
import CurrencySelector from '../molecules/CurrencySelector';
import {getData} from 'currency-data';
import AmountInput from '../molecules/AmountInput';
import {convertCurrencies} from '../../services/convertCurrencies';

export default function CurrencyConversionForm() {
  const [currencyFrom, setCurrencyFrom] = useState('EUR');
  const [amountFrom, setAmountFrom] = useState('1');
  const [currencyTo, setCurrencyTo] = useState('USD');
  const [resultAmount, setResultAmount] = useState('?');
  useEffect(() => {
    const convert = async () => {
      convertCurrencies(currencyFrom, currencyTo, amountFrom, setResultAmount);
    };

    convert();
  }, [currencyFrom, currencyTo, amountFrom]);

  const currencies = getData();
  return <>
    <ConversionResult currencyFrom={currencyFrom} amountFrom={amountFrom}
                      currencyTo={currencyTo} amountTo={resultAmount}/>
    <CurrencySelector currencies={currencies}
                      onChange={setCurrencyFrom}/>
    <AmountInput onChange={setAmountFrom} defaultValue={amountFrom}/>
    <CurrencySelector currencies={currencies}
                      onChange={setCurrencyTo}/>
  </>;
}

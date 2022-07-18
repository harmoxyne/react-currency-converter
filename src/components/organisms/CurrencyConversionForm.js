import React, {useEffect, useState} from 'react';
import ConversionResult from '../molecules/ConversionResult';
import CurrencySelector from '../molecules/CurrencySelector';
import {getData} from 'currency-data';
import AmountInput from '../molecules/AmountInput';
import {convertCurrencies} from '../../services/convertCurrencies';

export default function CurrencyConversionForm({
  defaultCurrencyFrom,
  defaultCurrencyTo,
  defaultAmountFrom,
}) {
  const [currencyFrom, setCurrencyFrom] = useState(defaultCurrencyFrom);
  const [amountFrom, setAmountFrom] = useState(defaultAmountFrom);
  const [currencyTo, setCurrencyTo] = useState(defaultCurrencyTo);
  const [resultAmount, setResultAmount] = useState('?');

  useEffect(() => {
    const convert = async () => {
      convertCurrencies(currencyFrom, currencyTo, amountFrom)
          .then(result => setResultAmount(result));
    };

    convert();
  }, [currencyFrom, currencyTo, amountFrom]);

  const currencies = getData();
  return <>
    <ConversionResult currencyFrom={currencyFrom} amountFrom={amountFrom}
                      currencyTo={currencyTo} amountTo={resultAmount}/>
    <CurrencySelector currencies={currencies}
                      onChange={setCurrencyFrom}
                      name={'currencyFrom'}/>
    <AmountInput onChange={setAmountFrom} defaultValue={amountFrom}/>
    <CurrencySelector currencies={currencies}
                      onChange={setCurrencyTo}
                      name={'currencyTo'}/>
  </>;
}

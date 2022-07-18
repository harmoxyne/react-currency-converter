import React from 'react';

export default function ConversionResult({
  currencyFrom,
  currencyTo,
  amountFrom,
  amountTo,
}) {
  return <p>{amountFrom} {currencyFrom} = {amountTo} {currencyTo}</p>;
}

import React from 'react';

export default function ConversionResult({
  currencyFrom,
  currencyTo,
  amountFrom,
  amountTo,
}) {
  return <p data-testid={'conversionResult'}>
    {amountFrom} {currencyFrom} = {amountTo} {currencyTo}
  </p>;
}

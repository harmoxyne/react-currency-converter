import React from 'react';
import Dropdown from '../atoms/Dropdown';

export default function CurrencySelector({onChange, currencies}) {
  return <Dropdown
      onChange={onChange}
      options={currencies}
      getValueCallback={(entry) => entry.currency.isoCode}
      getDescriptionCallback={(entry) => `${entry.currency.name}(${entry.currency.symbol})`}
  />;
}

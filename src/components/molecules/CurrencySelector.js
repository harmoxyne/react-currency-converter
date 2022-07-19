import React from 'react';
import Dropdown from '../atoms/Dropdown';

export default function CurrencySelector({onChange, currencies, name}) {
  return <Dropdown
      onChange={onChange}
      options={currencies}
      getValueCallback={(entry) => entry.currency.isoCode}
      getDescriptionCallback={(entry) => `${entry.currency.isoCode}(${entry.currency.symbol})`}
      name={name}
      defaultValue={'Choose currency'}
  />;
}

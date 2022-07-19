import React from 'react';
import Dropdown from '../atoms/Dropdown';

export default function CurrencySelector({onChange, currencies, name}) {
  return <Dropdown
      onChange={onChange}
      options={currencies}
      getValueCallback={(entry) => entry.isoCode}
      getDescriptionCallback={(entry) => `${entry.isoCode}(${entry.symbol})`}
      name={name}
      defaultValue={'Choose currency'}
  />;
}

import React from 'react';

export default function CurrencySelector({currencies, onChange}) {
  return <select onChange={(event) => onChange(event.target.value)}>
    {currencies.map(
        (entry) => <option
            value={entry.currency.isoCode}>{entry.currency.name}({entry.currency.symbol})
        </option>)
    }
  </select>;
}

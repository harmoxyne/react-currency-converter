import React from 'react';

export default function AmountInput({onChange}) {
  return <input onChange={(event) => onChange(event.target.value)}></input>;
}

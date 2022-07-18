import React from 'react';

export default function Input({onChange, defaultValue}) {
  return <input onChange={(event) => onChange(event.target.value)}
                defaultValue={defaultValue}/>;
}

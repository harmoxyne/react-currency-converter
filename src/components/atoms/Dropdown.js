import React from 'react';

export default function Dropdown({
  onChange,
  getValueCallback,
  getDescriptionCallback,
  options,
}) {
  return <select onChange={(event) => onChange(event.target.value)}>
    {options.map(
        (entry, index) => <option key={index} value={getValueCallback(entry)}>
          {getDescriptionCallback(entry)}
        </option>,
    )}
  </select>;
}

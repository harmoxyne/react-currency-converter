import React from 'react';

export default function Dropdown({
  onChange = () => {},
  getValueCallback = () => '',
  getDescriptionCallback = () => '',
  options = [],
  name = '',
}) {
  return <select
      onChange={(event) => onChange(event.target.value)}
      name={name}
      data-testid={name}
  >
    {options.map(
        (entry, index) => <option key={index} value={getValueCallback(entry)}>
          {getDescriptionCallback(entry)}
        </option>,
    )}
  </select>;
}

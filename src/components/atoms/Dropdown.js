import React from 'react';
import {Select} from '@chakra-ui/react';

export default function Dropdown({
  onChange = () => {},
  defaultValue = '',
  getValueCallback = () => '',
  getDescriptionCallback = () => '',
  options = [],
  name = '',
}) {
  return <Select
      onChange={(event) => onChange(event.target.value)}
      name={name}
      data-testid={name}
      placeholder={defaultValue}
      variant={'outline'}
  >
    {options.map(
        (entry, index) => <option key={index} value={getValueCallback(entry)}>
          {getDescriptionCallback(entry)}
        </option>,
    )}
  </Select>;
}

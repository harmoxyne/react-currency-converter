import React from 'react';
import {
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

export default function Input({onChange, defaultValue, type, name}) {
  return <FormControl id={name}>
    <NumberInput
        allowMouseWheel
        name={name}
        value={defaultValue}
        onChange={onChange}
        min={0}
        precision={2}
    >
      <NumberInputField
          maxLength={15}
      />
      <NumberInputStepper/>
    </NumberInput>
  </FormControl>;
}

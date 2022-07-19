import React from 'react';
import Input from '../atoms/Input';

export default function AmountInput({onChange, defaultValue}) {
  return <Input onChange={onChange}
                defaultValue={defaultValue}
                name={'amountInput'}
  />;
}

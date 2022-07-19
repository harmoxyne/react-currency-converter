import React from 'react';
import {Stat, StatLabel, StatNumber, useColorModeValue} from '@chakra-ui/react';

export default function ConversionResult({
  currencyFrom,
  currencyTo,
  amountFrom,
  amountTo,
}) {
  return <Stat
      mt={2}
      padding={[10, 0]}
      borderRadius={[5, 0]}
      borderWidth={[1, 0]}
      borderColor={useColorModeValue(
          ['gray.200'],
          ['whiteAlpha.50', 'transparent'],
      )}
      data-testid={'conversionResult'}
  >
    <StatLabel mb={'5px'}>
      {amountFrom} {currencyFrom} =
    </StatLabel>
    <StatNumber fontSize={['2xl', '3xl']} mb={'5px'}>
      {amountTo} {currencyTo}
    </StatNumber>
  </Stat>;
}

import React from 'react';
import {Text} from '@chakra-ui/react';

export default function Heading({text}) {
  return <Text
      as="h1"
      fontSize={['3xl', '4xl', '5xl']}
      mb={[-3, 3]}
      zIndex={100}
  >
    {text}
  </Text>;
}

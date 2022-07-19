import React from 'react';
import {Flex} from '@chakra-ui/react';
import ToggleColorMode from '../molecules/ToggleColorMode';
import SocialLinks from '../molecules/SocialLinks';

export default function Footer() {
  return <footer>
    <Flex
        direction={'column'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={10}
    >
      <ToggleColorMode/>
      <p>
        Conversion rates provided by&nbsp;
        <a href={'https://exchangerate.host/#/'}>exchangerate.host</a>
      </p>
      <SocialLinks/>
    </Flex>
  </footer>;
}



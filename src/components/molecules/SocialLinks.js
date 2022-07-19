import React from 'react';
import SocialLink from '../atoms/SocialLink';
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5';
import {Flex} from '@chakra-ui/react';

export default function SocialLinks() {
  return <Flex direction={'row'}>
    <SocialLink
        icon={IoLogoGithub}
        link={'https://github.com/harmoxyne'}
    />
    <SocialLink
        icon={IoLogoLinkedin}
        link={'https://www.linkedin.com/in/harmoxyne/'}
    />
  </Flex>;
}

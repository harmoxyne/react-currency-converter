import React from 'react';
import {Icon, IconButton} from '@chakra-ui/react';

export default function SocialLink({icon, link}) {
  return <IconButton
      aria-label={'Social link'}
      icon={<Icon as={icon}/>}
      variant={'ghost'}
      onClick={() => window.open(link, '_blank')}
  />;
}

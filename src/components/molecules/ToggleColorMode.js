import React from 'react';
import {
  IconButton,
  Menu,
  MenuButton, MenuItem, MenuList,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {SettingsIcon, SunIcon, MoonIcon} from '@chakra-ui/icons';

export default function ToggleColorMode() {
  const {colorMode, toggleColorMode} = useColorMode();

  return <Menu>
    <MenuButton
        as={IconButton}
        aria-label={'Settings'}
        icon={
          <SettingsIcon color={useColorModeValue('gray.800', 'gray.500')}/>
        }
        variant={'ghost'}
    />
    <MenuList>
      <MenuItem
          icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
          onClick={toggleColorMode}
      >
        Toggle to {colorMode === 'dark' ? ' light ' : ' dark '} mode
      </MenuItem>
    </MenuList>
  </Menu>;
}

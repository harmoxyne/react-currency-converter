import React, {useEffect, useState} from 'react';
import ConversionResult from '../molecules/ConversionResult';
import CurrencySelector from '../molecules/CurrencySelector';
import {getAll} from 'currency-library';
import AmountInput from '../molecules/AmountInput';
import {convertCurrencies} from '../../services/convertCurrencies';
import {
  Stack,
  Box,
  useColorMode,
  Center,
  IconButton,
} from '@chakra-ui/react';
import {UpDownIcon} from '@chakra-ui/icons';

export default function CurrencyConversionForm({
  defaultCurrencyFrom,
  defaultCurrencyTo,
  defaultAmountFrom,
}) {
  const {colorMode} = useColorMode();
  const [currencyFrom, setCurrencyFrom] = useState(defaultCurrencyFrom);
  const [amountFrom, setAmountFrom] = useState(defaultAmountFrom);
  const [currencyTo, setCurrencyTo] = useState(defaultCurrencyTo);
  const [resultAmount, setResultAmount] = useState('?');

  useEffect(() => {
    const convert = async () => {
      convertCurrencies(currencyFrom, currencyTo, amountFrom)
          .then(result => setResultAmount(result));
    };

    convert();
  }, [currencyFrom, currencyTo, amountFrom]);

  const handleSwapCurrencies = () => {
    const temp = currencyFrom;
    setCurrencyFrom(currencyTo);
    setCurrencyTo(temp);
  };

  const currencies = getAll();
  return <Stack
      backgroundColor={colorMode === 'dark' ? 'gray.800' : 'white'}
      borderRadius={10}
      px={15}
      pt={[8, 10]}
      pb={4}
      spacing={5}
      shadow={[null, 'lg']}
      width={['auto', '500px']}
  >
    <Box>
      <AmountInput onChange={setAmountFrom} defaultValue={amountFrom}/>
    </Box>
    <Box ml={1}>
      <CurrencySelector currencies={currencies}
                        onChange={setCurrencyFrom}
                        name={'currencyFrom'}/>
    </Box>

    <Center>
      <IconButton
          aria-label={'Swap currencies'}
          variant={'ghost'}
          icon={<UpDownIcon/>}
          onClick={handleSwapCurrencies}
      />
    </Center>

    <Box ml={1}>
      <CurrencySelector currencies={currencies}
                        onChange={setCurrencyTo}
                        name={'currencyTo'}/>
    </Box>

    <Box>
      <ConversionResult currencyFrom={currencyFrom} amountFrom={amountFrom}
                        currencyTo={currencyTo} amountTo={resultAmount}/>
    </Box>
  </Stack>;
}

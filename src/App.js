import './App.css';
import Footer from './components/organisms/Footer';
import CurrencyConversionForm
  from './components/organisms/CurrencyConversionForm';
import {Box, Flex, ChakraProvider} from '@chakra-ui/react';
import Header from './components/molecules/Header';

/* istanbul ignore file */
function App() {
  return (<ChakraProvider>
        <Box as={'main'}>
          <Flex
              direction={'column'}
              align={'center'}
              justify={'center'}
          >
            <Header/>
            <CurrencyConversionForm
                defaultCurrencyFrom={'EUR'}
                defaultCurrencyTo={'USD'}
                defaultAmountFrom={10}
            />
          </Flex>
        </Box>
        <Footer/>
      </ChakraProvider>
  );
}

export default App;

import './App.css';
import Footer from './components/molecules/Footer';
import CurrencyConversionForm
  from './components/organisms/CurrencyConversionForm';

/* istanbul ignore file */
function App() {

  return (
      <div className="App">
        <CurrencyConversionForm
            defaultCurrencyFrom={'EUR'}
            defaultCurrencyTo={'USD'}
            defaultAmountFrom={10}
        />
        <Footer/>
      </div>
  );
}

export default App;

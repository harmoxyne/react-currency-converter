import './App.css';
import Footer from './components/molecules/Footer';
import CurrencyConversionForm
  from './components/organisms/CurrencyConversionForm';

function App() {

  return (
      <div className="App">
        <CurrencyConversionForm/>
        <Footer/>
      </div>
  );
}

export default App;

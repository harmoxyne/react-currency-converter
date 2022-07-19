import {render, screen} from '@testing-library/react';
import CurrencyConversionForm from '../CurrencyConversionForm';
import userEvent from '@testing-library/user-event';

describe('<CurrencyConversionForm />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should change conversion result when currencyFrom selected', async () => {
    fetch.mockResponse(JSON.stringify({result: 15}));

    render(<CurrencyConversionForm
        defaultCurrencyFrom={'EUR'}
        defaultCurrencyTo={'USD'}
        defaultAmountFrom={10}
    />);

    const currencyFromSelector = screen.getByTestId('currencyFrom');
    await userEvent.selectOptions(currencyFromSelector, 'UAH');

    const expectedConversionResult = '10 UAH =15 USD';
    expect(screen.getByTestId('conversionResult'))
        .toHaveTextContent(expectedConversionResult);
  });

  it('should change conversion result when currencyTo selected', async () => {
    fetch.mockResponse(JSON.stringify({result: 15}));

    render(<CurrencyConversionForm
        defaultCurrencyFrom={'EUR'}
        defaultCurrencyTo={'USD'}
        defaultAmountFrom={10}
    />);

    const currencyToSelector = screen.getByTestId('currencyTo');
    await userEvent.selectOptions(currencyToSelector, 'UAH');

    const expectedConversionResult = '10 EUR =15 UAH';
    expect(screen.getByTestId('conversionResult'))
        .toHaveTextContent(expectedConversionResult);
  });

  it('should change conversion result when amount changed', async () => {
    fetch.mockResponse(JSON.stringify({result: 15}));

    render(<CurrencyConversionForm
        defaultCurrencyFrom={'EUR'}
        defaultCurrencyTo={'USD'}
        defaultAmountFrom={10}
    />);

    const amountInput = screen.getByRole('spinbutton');
    await userEvent.type(amountInput, '25');

    const expectedConversionResult = '25 EUR =15 USD';
    expect(screen.getByTestId('conversionResult'))
        .toHaveTextContent(expectedConversionResult);
  });

  it('should swap currencies when button clicked', async () => {
    fetch.mockResponse(JSON.stringify({result: 15}));

    render(<CurrencyConversionForm
        defaultCurrencyFrom={'EUR'}
        defaultCurrencyTo={'USD'}
        defaultAmountFrom={10}
    />);

    const swapButton = screen.getByRole('button');

    await userEvent.click(swapButton);
    const expectedConversionResult = '10 USD =15 EUR';
    expect(screen.getByTestId('conversionResult'))
        .toHaveTextContent(expectedConversionResult);
  });
});

import {fireEvent, render, screen} from '@testing-library/react';
import CurrencySelector from '../CurrencySelector';

describe('<CurrencySelector />', () => {
  const currencies = [
    {
      currency: {
        isoCode: 'TEST',
        name: 'TEST',
        symbol: 'T',
      },
    },
  ];

  it('should display provided currency as option', () => {
    render(<CurrencySelector
        currencies={currencies}
    />);

    expect(screen.getByText(/TEST\(T\)/i)).toBeInTheDocument();
  });

  it('should populate "name" property to testId', () => {
    render(<CurrencySelector
        currencies={currencies}
        name={'test_name'}
    />);

    expect(screen.getByTestId('test_name')).toBeInTheDocument();
  });

  it('should call onChange callback when currency selected', () => {
    const onChangeMock = jest.fn();

    render(<CurrencySelector
        currencies={currencies}
        onChange={onChangeMock}
    />);

    fireEvent.change(screen.getByRole('combobox'), {
      target: {value: currencies[0].currency.isoCode},
    });

    expect(onChangeMock).toBeCalledWith(currencies[0].currency.isoCode);
  });
});

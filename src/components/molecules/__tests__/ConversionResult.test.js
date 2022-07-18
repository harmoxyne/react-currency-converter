import {render, screen} from '@testing-library/react';
import ConversionResult from '../ConversionResult';

describe('<ConversionResult />', () => {
  const currencyFrom = 'EUR';
  const currencyTo = 'USD';
  const amountFrom = 1;
  const amountTo = 2;
  it('should contain correct string', () => {
    render(<ConversionResult
        currencyFrom={currencyFrom}
        currencyTo={currencyTo}
        amountFrom={amountFrom}
        amountTo={amountTo}
    />);

    const expectedResult = `${amountFrom} ${currencyFrom} = ${amountTo} ${currencyTo}`;

    expect(screen.getByText(expectedResult)).toBeTruthy();
  });
});

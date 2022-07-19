import {render, screen} from '@testing-library/react';
import AmountInput from '../AmountInput';

describe('<AmountInput />', () => {
  it('should display passed defaultValue', () => {
    const expectedValue = 'test';

    render(<AmountInput
        defaultValue={expectedValue}
    />);

    expect(screen.getByRole('spinbutton').value).toEqual(expectedValue);
  });
});

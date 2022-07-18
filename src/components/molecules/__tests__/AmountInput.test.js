import {fireEvent, render, screen} from '@testing-library/react';
import AmountInput from '../AmountInput';

describe('<AmountInput />', () => {
  it('should display passed defaultValue', () => {
    const expectedValue = 'test';

    render(<AmountInput
        defaultValue={expectedValue}
    />);

    expect(screen.getByRole('textbox').value).toEqual(expectedValue);
  });

  it('should call onChange callback when value changes', () => {
    const onChangeMock = jest.fn();
    const expectedValue = '123';

    render(<AmountInput
        onChange={onChangeMock}
    />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: expectedValue},
    });

    expect(onChangeMock).toBeCalledWith(expectedValue);
  });
});

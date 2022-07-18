import {fireEvent, render, screen} from '@testing-library/react';
import Input from '../Input';

describe('<Input />', () => {
  it('should display passed defaultValue', () => {
    const expectedValue = 'test';

    render(<Input
        defaultValue={expectedValue}
    />);

    expect(screen.getByRole('textbox').value).toEqual(expectedValue);
  });

  it('should call onChange callback when value changes', () => {
    const onChangeMock = jest.fn();
    const expectedValue = '123';

    render(<Input
        onChange={onChangeMock}
    />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: expectedValue},
    });

    expect(onChangeMock).toBeCalledWith(expectedValue);
  });
});

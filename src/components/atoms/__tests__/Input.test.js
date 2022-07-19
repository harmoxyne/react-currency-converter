import {fireEvent, render, screen} from '@testing-library/react';
import Input from '../Input';

describe('<Input />', () => {
  it('should display passed defaultValue', () => {
    const expectedValue = 'test';

    render(<Input
        defaultValue={expectedValue}
    />);

    expect(screen.getByRole('spinbutton').value).toEqual(expectedValue);
  });
});

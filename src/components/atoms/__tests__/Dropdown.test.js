import {fireEvent, render, screen} from '@testing-library/react';
import Dropdown from '../Dropdown';

describe('<Dropdown />', () => {
  it('should call getValueCallback if options provided', () => {
    const getValueCallbackMock = jest.fn();

    render(<Dropdown
        options={[1]}
        getValueCallback={getValueCallbackMock}
    />);
    expect(getValueCallbackMock).toBeCalled();
  });

  it('should not call getValueCallback if no options provided', () => {
    const getValueCallbackMock = jest.fn();

    render(<Dropdown
        getValueCallback={getValueCallbackMock}
    />);
    expect(getValueCallbackMock).not.toBeCalled();
  });
  it('should call getDescriptionCallback if options provided', () => {
    const getDescriptionCallbackMock = jest.fn();

    render(<Dropdown
        options={[1]}
        getDescriptionCallback={getDescriptionCallbackMock}
    />);
    expect(getDescriptionCallbackMock).toBeCalled();
  });

  it('should not call getDescriptionCallback if no options provided', () => {
    const getDescriptionCallbackMock = jest.fn();

    render(<Dropdown
        getDescriptionCallback={getDescriptionCallbackMock}
    />);
    expect(getDescriptionCallbackMock).not.toBeCalled();
  });

  it('should contain option with value provided by getDescriptionCallback',
      () => {
        const getDescriptionCallbackMock = jest.fn(() => 'Test entry');

        render(<Dropdown
            options={[1]}
            getDescriptionCallback={getDescriptionCallbackMock}
        />);

        expect(screen.getByText(/Test entry/i)).toBeInTheDocument();
      });

  it('should call onChange callback with value when selecting option', () => {
    const getDescriptionCallbackMock = jest.fn(() => 'Test entry');
    const getValueCallbackMock = jest.fn(() => 'test_value');
    const callbackMock = jest.fn();
    const expectedValue = 'test_value';

    render(<Dropdown
        options={[1]}
        getDescriptionCallback={getDescriptionCallbackMock}
        getValueCallback={getValueCallbackMock}
        onChange={callbackMock}
    />);

    fireEvent.change(screen.getByRole('combobox'), {
      target: {value: expectedValue},
    });

    expect(callbackMock).toBeCalledWith(expectedValue);
  });

  it('should populate "name" property to testId', () => {
    render(<Dropdown
        name={'test_name'}
    />);

    expect(screen.getByTestId('test_name')).toBeInTheDocument();
  });
});

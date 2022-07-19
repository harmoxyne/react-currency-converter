import {render, screen} from '@testing-library/react';
import Heading from '../Heading';

describe('<Heading />', () => {
  it('should display passed text', () => {
    render(<Heading
        text={'test_value'}
    />);

    expect(screen.getByText('test_value')).toBeTruthy();
  });
});

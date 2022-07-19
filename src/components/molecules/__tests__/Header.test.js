import {render, screen} from '@testing-library/react';
import Header from '../Header';

describe('<Heading />', () => {
  it('should display correct header', () => {
    render(<Header/>);

    expect(screen.getByText('Currency converter')).toBeTruthy();
  });
});

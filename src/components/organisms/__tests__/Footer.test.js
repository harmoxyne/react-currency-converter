import {render, screen} from '@testing-library/react';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('should display conversion credits', () => {
    render(<Footer/>);

    const expectedResult = 'Conversion rates provided by exchangerate.host';

    expect(screen.getByRole('contentinfo')).toHaveTextContent(expectedResult);
  });
});

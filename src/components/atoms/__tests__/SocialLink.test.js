import {render, screen} from '@testing-library/react';
import SocialLink from '../SocialLink';
import userEvent from '@testing-library/user-event';

describe('<SocialLink />', () => {
  it('should render correctly', () => {
    render(<SocialLink
        link={'https://github.com'}
    />);

    expect(screen.getByRole('button')).toBeVisible();
  });

  it('should open link when clicked', async () => {
    window.open = jest.fn();

    render(<SocialLink
        link={'https://github.com'}
    />);

    const iconButton = screen.getByRole('button');
    await userEvent.click(iconButton);

    expect(window.open).toBeCalledWith('https://github.com', '_blank');
  });
});

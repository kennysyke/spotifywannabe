import React from 'react';
import { customRender } from './test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from '../dynamic/theme-switcher/index';

describe('<ThemeSwitcher />', () => {
  it('should change theme by click', () => {
    customRender(<ThemeSwitcher />);

    const divElement = screen.getByTestId('theme-switcher-button');

    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveAttribute(
      'xlinkHref',
      expect.stringContaining('icon-light')
    );

    fireEvent.click(divElement);

    expect(divElement).toHaveAttribute(
      'xlinkHref',
      expect.stringContaining('icon-dark')
    );
  });
});

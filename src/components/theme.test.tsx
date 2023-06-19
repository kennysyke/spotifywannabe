import React from 'react';
import { customRender } from './test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from '../dynamic/theme-switcher/index';
import '@testing-library/jest-dom';

describe('<ThemeSwitcher />', () => {
  it('should change theme by click', async () => {
    customRender(<ThemeSwitcher />);

    const divElement = screen.getByTestId('theme-switcher-button');
    const useElement = divElement.querySelector('use');

    expect(divElement).toBeInTheDocument();
    expect(useElement).toHaveAttribute(
      'xlink:href',
      expect.stringContaining('sprite.svg#icon-light')
    );

    fireEvent.click(divElement);

    expect(useElement).toHaveAttribute(
      'xlink:href',
      expect.stringContaining('sprite.svg#icon-dark')
    );
  });
});

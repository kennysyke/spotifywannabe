import React from 'react';
import jest from 'jest';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, test, expect } from 'jest';

import BurgerMenu from './BurgerMenu';

describe('BurgerMenu', () => {
  test('renders without errors', () => {
    render(
      <Router>
        <BurgerMenu />
      </Router>
    );
  });

  test('toggles menu on burger icon click', () => {
    const { getByTestId } = render(
      <Router>
        <BurgerMenu />
      </Router>
    );

    const burgerIcon = getByTestId('burger-icon');
    fireEvent.click(burgerIcon);

    const menu = getByTestId('menu');
    expect(menu.classList.contains('open')).toBe(true);

    fireEvent.click(burgerIcon);
    expect(menu.classList.contains('open')).toBe(false);
  });

  test('calls handleLogout function on logout link click', () => {
    const handleLogoutMock = jest.fn();
    const { getByText } = render(
      <Router>
        <BurgerMenu />
      </Router>
    );

    const logoutLink = getByText('Выйти');
    fireEvent.click(logoutLink);

    expect(handleLogoutMock).toHaveBeenCalled();
  });
});

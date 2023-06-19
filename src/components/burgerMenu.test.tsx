import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from '../css/burgerMenu.module.css';
import BurgerMenu from './BurgerMenu';

describe('BurgerMenu', () => {
  test('renders without errors', () => {
    render(
      <Router>
        <BurgerMenu />
      </Router>
    );
  });

  test('toggles menu on burger lines click', () => {
    const { container } = render(
      <Router>
        <BurgerMenu />
      </Router>
    );

    const burgerLines = container.getElementsByClassName(styles.burger__line);
    const menu = container.getElementsByClassName(styles.menu)[0];

    expect(menu.classList.contains(styles.open)).toBe(true);

    fireEvent.click(burgerLines[0]);
  });
});

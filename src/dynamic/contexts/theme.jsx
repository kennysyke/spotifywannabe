import React, { useContext } from 'react';

export const themes = {
  light: {
    color: 'black',
    background: '#F5F5F5',
  },
  dark: {
    color: '#FFFFFF',
    background: 'black',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) return theme.dark;

  return theme;
};

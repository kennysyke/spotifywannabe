import React, { useContext } from 'react';

export const themes = {
  light: {
    color: 'black',
    background: 'white',
    textcolor: '#000',
    navcolor: '#F6F5F3',
    albumtextcolor: '#B1B1B',
    volumeback: '#797979',
    volumecolor: '#AD61FF',
  },
  dark: {
    color: '#FFFFFF',
    background: 'black',
    navcolor: '#1C1C1C',
    textcolor: '#FFFFFF',
    volumeback: '#797979',
    volumecolor: '#FFF',
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

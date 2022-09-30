import React, { createContext, useState } from 'react';

// eslint-disable-next-line
export const ThemeContext = createContext<any>({ theme: 'light', undefined });

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'light');

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#42A5F5' : '#1976D2',
            light: mode === 'dark' ? '#80D6FF' : '#42A5F5',
            dark: mode === 'dark' ? '#1565C0' : '#1565C0',
          },
          secondary: {
            main: mode === 'dark' ? '#F06292' : '#D81B60',
          },
          background: {
            default: mode === 'dark' ? '#0a1929' : '#f5f7fa',
            paper: mode === 'dark' ? '#1a2a44' : '#ffffff',
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", sans-serif',
          h3: { fontWeight: 700, fontSize: '2.5rem', '@media (max-width:600px)': { fontSize: '2rem' } },
          h4: { fontWeight: 600, fontSize: '1.8rem' },
          h6: { fontWeight: 600 },
          body1: { lineHeight: 1.8 },
          button: { textTransform: 'none', fontWeight: 600 },
        },
        shape: { borderRadius: 12 },
        components: {
          MuiCard: { styleOverrides: { root: { borderRadius: 16, transition: 'transform 0.3s ease' } } },
          MuiButton: { styleOverrides: { root: { borderRadius: 10 } } },
          MuiChip: { styleOverrides: { root: { borderRadius: 8 } } },
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
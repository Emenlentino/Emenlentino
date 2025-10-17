import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, Typography, Box, Button } from '@mui/material';
import App from './App.jsx';
import { ResumeProvider } from './context/ResumeContext.jsx';
import { ThemeModeProvider } from './context/ThemeContext.jsx';
import './index.css';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 4, textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h4" color="error" gutterBottom>
            Something went wrong
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            An error occurred while loading the page. Please try again or contact support.
          </Typography>
          <Button variant="contained" onClick={() => window.location.reload()}>
            Reload Page
          </Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeModeProvider>
        <ResumeProvider>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
        </ResumeProvider>
      </ThemeModeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
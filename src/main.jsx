import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Component to handle 404.html redirects for SPA routing
const RedirectHandler = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we were redirected from 404.html
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      // Extract the path from the full URL
      const url = new URL(redirect);
      const path = url.pathname + url.search + url.hash;
      // Navigate to the intended route
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return children;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RedirectHandler>
          <App />
        </RedirectHandler>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
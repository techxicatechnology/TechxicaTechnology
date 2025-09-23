import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Techxica Technology</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Techxica Technology homepage to explore our technology solutions." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="not-found-container" style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #ff474d 0%, #66d8efc5, #698ef5)'
      }}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '3rem',
          borderRadius: '15px',
          border: '2px solid #ff474d',
          boxShadow: '0 0 30px rgba(255, 71, 77, 0.3)'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#ff474d',
            marginBottom: '1rem',
            textShadow: '0 0 10px rgba(255, 71, 77, 0.5)'
          }}>404</h1>
          
          <h2 style={{
            fontSize: '1.5rem',
            color: '#ffffff',
            marginBottom: '1rem',
            fontFamily: 'Orbitron, sans-serif'
          }}>Page Not Found</h2>
          
          <p style={{
            color: '#cccccc',
            marginBottom: '2rem',
            maxWidth: '400px'
          }}>
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring our technology solutions.
          </p>
          
          <Link 
            to="/" 
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #ff474d, #698ef5)',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 0 20px rgba(255, 71, 77, 0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ConnectionTest() {
  const [status, setStatus] = useState('Testing...');
  const [error, setError] = useState(null);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      console.log('Testing backend connection...');
      const response = await axios.get('http://localhost:8081/api/health', {
        timeout: 5000,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      console.log('Backend response:', response.data);
      setStatus('Connected ✅');
      setError(null);
    } catch (error) {
      console.error('Connection test failed:', error);
      setStatus('Failed to connect ❌');
      setError(error.message);
      if (error.response) {
        console.log('Error response:', error.response.data);
      }
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: 10, 
      right: 10, 
      padding: 10,
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderRadius: 4,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div>Backend Status: {status}</div>
      {error && <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>}
    </div>
  );
}
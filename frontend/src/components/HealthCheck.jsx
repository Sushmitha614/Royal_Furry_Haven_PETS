import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';

export default function HealthCheck() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.healthCheck()
      .then(response => {
        setStatus(response.data.status);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to connect to backend');
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Backend Health Check
      </Typography>
      {loading && <CircularProgress />}
      {status && <Alert severity="success">Backend Status: {status}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
}

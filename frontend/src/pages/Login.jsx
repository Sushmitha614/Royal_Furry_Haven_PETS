import React, { useState } from 'react';
import { Box, Card, Typography, Link } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2196f3" },
    secondary: { main: "#9c27b0" },
    background: { default: "#fff" },
    text: { primary: "#333", secondary: "#666" },
  },
  typography: { fontFamily: "'Roboto', sans-serif" },
});

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.email.trim() || !form.password.trim()) {
      setError('Email and password are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSuccess('Login successful! (Connect to backend for real authentication)');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#ffe4e1",
          padding: 2,
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 400,
            padding: 4,
            borderRadius: 4,
            boxShadow: 10,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
          {success && <Typography color="success.main" sx={{ mb: 2 }}>{success}</Typography>}
          <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <Box sx={{ mb: 3 }}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
              />
            </Box>
            <button type="submit" style={{ width: '100%', padding: 10 }}>
              Login
            </button>
          </Box>
          <Box sx={{ mt: 2, textAlign: 'right' }}>
            <Link href="/forgot-password" underline="hover">
              Forgot Password?
            </Link>
          </Box>
          <Box sx={{ mt: 1, textAlign: 'right' }}>
            <Typography variant="body2" component="span">
              Don't have an account?{' '}
              <Link href="/signup" underline="hover">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
import React, { useState } from 'react';
import { Box, Card, Typography, Link, Button, TextField } from '@mui/material';
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

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!email.trim()) {
      setError('Email is required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSuccess('Password reset link sent! (Connect to backend for real email)');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
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
          <Typography variant="h5" fontWeight="500" color="text.primary" gutterBottom>
            Forgot Password
          </Typography>
          {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
          {success && <Typography color="primary" sx={{ mb: 2 }}>{success}</Typography>}
          <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Email Address"
              variant="standard"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              margin="normal"
              sx={{
                mb: 3,
                '& .MuiInputLabel-root': {
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: theme.palette.primary.main,
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                borderRadius: 2,
                py: 1.5,
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                background: "linear-gradient(to right, #2196f3, #9c27b0)",
                '&:hover': {
                  opacity: 0.9,
                },
              }}
            >
              Send Reset Link
            </Button>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Link href="/" underline="hover" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
                Back to Login
              </Link>
            </Box>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

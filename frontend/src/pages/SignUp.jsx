import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  Link
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/LOGO.png';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: { main: '#2196f3' },
    secondary: { main: '#9c27b0' },
    background: { default: '#fff' },
    text: { primary: '#333', secondary: '#666' },
  },
  typography: { fontFamily: 'Roboto, sans-serif' },
});

// Zod schema for validation
const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export default function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // On form submission
  const onSubmit = async (data) => {
    try {
      console.log('Registering:', data);
      // Simulating email sending
      setSnackbar({ open: true, message: 'Sign up successful! Please check your email.', severity: 'success' });
      setTimeout(() => navigate('/login'), 2000); // Redirect after successful signup
    } catch (err) {
      setSnackbar({ open: true, message: 'Something went wrong.', severity: 'error' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          padding: 2,
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 1000,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: 10,
          }}
        >
          {/* Left Panel */}
          <Box
            sx={{
              flex: 1,
              background: 'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 4,
              position: 'relative'
            }}
          >
            <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
              <img src={logo} alt="Logo" style={{ width: 100, height: 100, borderRadius: '50%' }} />
            </Box>
            <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ color: '#fff', textAlign: 'center' }}>
              Royal Furry Heaven
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', maxWidth: '80%', lineHeight: 1.8 }}>
              Join our furry family today! 💙💜
            </Typography>
          </Box>

          {/* Right Panel - Form */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 4,
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Typography variant="h5" fontWeight={500} gutterBottom>
                Sign Up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="standard"
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  label="Password"
                  fullWidth
                  margin="normal"
                  variant="standard"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Confirm Password"
                  fullWidth
                  margin="normal"
                  variant="standard"
                  type="password"
                  {...register('confirmPassword')}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    py: 1.5,
                    background: 'linear-gradient(to right, #2196f3, #9c27b0)',
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  Sign Up
                </Button>
                <Box mt={3} textAlign="center">
                  <Typography variant="body2" color="text.secondary">
                    Already have an account?{' '}
                    <Link
                      component={RouterLink}
                      to="/"
                      underline="hover"
                      sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
                    >
                      Sign In
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={5000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

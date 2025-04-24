import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
  IconButton,
  InputAdornment
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PetsIcon from '@mui/icons-material/Pets';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../assets/LOGO.png';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Blue
    },
    secondary: {
      main: "#9c27b0", // Purple
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#333",
      secondary: "#666",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'remember' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Add your login logic here
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
            maxWidth: 1000,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: 10,
          }}
        >
          {/* Left Welcome Section */}
          <Box
            sx={{
              flex: 1,
              background: "linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              padding: 4,
            }}
          >
            {/* Add logo in top-left corner */}
            <Box 
              sx={{ 
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 2,
              }}
            >
              <img 
                src={logo} 
                alt="Royal Furry Heaven Logo" 
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                width: "200%",
                height: "200%",
                background: `
                  radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 30%),
                  radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 25%)
                `,
                animation: "rotate 30s linear infinite",
                zIndex: 0,
              }}
            />

            {/* Animated paw icons with improved visibility */}
            {[...Array(15)].map((_, i) => (
              <PetsIcon
                key={i}
                sx={{
                  position: "absolute",
                  fontSize: `${40 + i * 6}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: "rgba(255,255,255,0.3)",
                  animation: `floatUp ${15 + i * 2}s linear infinite`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                }}
              />
            ))}

            <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                  textShadow: "2px 4px 8px rgba(0,0,0,0.2)",
                  letterSpacing: "3px",
                  background: "linear-gradient(to right, #ffffff, #e0e0e0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 3,
                }}
              >
                Royal Furry Heaven
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.95,
                  maxWidth: "90%",
                  margin: "0 auto",
                  letterSpacing: "1.5px",
                  lineHeight: 1.8,
                  textShadow: "1px 2px 4px rgba(0,0,0,0.15)",
                }}
              >
                  Pampering Your Pets with Love🩷💜  Sign in to continue
              </Typography>
            </Box>
          </Box>

          {/* Right Login Form Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: 4,
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 400 }}>
              <Typography 
                variant="h5" 
                fontWeight="500" 
                color="text.primary" 
                gutterBottom
              >
                Sign In
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ mb: 4 }}
              >
                Please enter your credentials to continue
              </Typography>
              <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email Address"
                  variant="standard"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'primary.main',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  variant="standard"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          size="small"
                          sx={{ color: 'text.secondary' }}
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mb: 2,
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'primary.main',
                    },
                  }}
                />
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <FormControlLabel
                    control={
                      <Checkbox 
                        color="primary" 
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}
                        sx={{ '&.Mui-checked': { color: theme.palette.primary.main } }}
                      />
                    }
                    label={<Typography variant="body2">Remember me</Typography>}
                  />
                  <Link href="#" underline="hover" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
                    Forgot Password?
                  </Link>
                </Box>
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
                  Sign In
                </Button>
                <Box mt={3} textAlign="center">
                  <Typography variant="body2" color="text.secondary">
                    Don't have an account?{' '}
                    <Link href="#" underline="hover" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
                      Sign Up
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>

      {/* Floating Animation Keyframes */}
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
      `}</style>
    </ThemeProvider>
  );
}

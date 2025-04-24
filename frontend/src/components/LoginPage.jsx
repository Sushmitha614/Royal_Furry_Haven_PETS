import React from "react";
import {
  TextField,
  Checkbox,
  Button,
  Typography,
  Link,
  Card,
  CardContent,
  Box,
  Grid,
  FormControlLabel
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PetsIcon from '@mui/icons-material/Pets';

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
              background: "linear-gradient(to right, #2196f3, #9c27b0)",
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
            <Box
              sx={{
                position: "absolute",
                width: "200%",
                height: "200%",
                background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)",
                animation: "rotate 20s linear infinite",
                zIndex: 0,
              }}
            />

            {[...Array(6)].map((_, i) => (
              <PetsIcon
                key={i}
                sx={{
                  position: "absolute",
                  fontSize: `${30 + i * 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: "rgba(255,255,255,0.1)",
                  animation: `floatUp ${10 + i * 2}s linear infinite`,
                }}
              />
            ))}

            <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  letterSpacing: "2px",
                }}
              >
                Royal Furry Heaven
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 0.9,
                  maxWidth: "80%",
                  margin: "0 auto",
                  letterSpacing: "1px",
                }}
              >
                Pampering Your Pets with Love — Sign in to continue
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
              <Typography variant="h6" gutterBottom>
                Hello! <span style={{ color: theme.palette.secondary.main }}>Good Morning</span>
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
                Login Your Account
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email Address"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  type="password"
                  label="Password"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
                <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label={<Typography variant="body2" color="text.secondary">Remember</Typography>}
                  />
                  <Link href="#" underline="hover" color="secondary">
                    Forgot Password?
                  </Link>
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 8,
                    paddingY: 1.5,
                    mt: 2,
                    background: "linear-gradient(to right, #2196f3, #9c27b0)",
                    color: "#fff",
                    fontWeight: "bold",
                    '&:hover': {
                      opacity: 0.9,
                    },
                  }}
                >
                  SUBMIT
                </Button>
                <Box mt={2} textAlign="center">
                  <Link href="#" underline="hover" color="primary">
                    Create Account
                  </Link>
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

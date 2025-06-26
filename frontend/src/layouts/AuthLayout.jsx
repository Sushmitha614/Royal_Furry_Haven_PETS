import React from 'react';
import { Box, Card } from '@mui/material';

export default function AuthLayout({ children }) {
  return (
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
        {children}
      </Card>
    </Box>
  );
}

import React from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function UserInfoForm({ values, onChange, onSubmit }) {
  return (
    <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: 400 }}>
      <TextField
        label="Full Name"
        name="name"
        value={values.name}
        onChange={onChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={values.email}
        onChange={onChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={values.phone}
        onChange={onChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
}
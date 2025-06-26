import React, { useState } from 'react';
import {
  Box, Card, CardContent, Typography, TextField, Button, Fade, MenuItem, Switch, FormControlLabel
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const roles = ['User', 'Moderator'];

export default function EditUser() {
  const { id } = useParams();
  // Example pre-filled data (replace with real fetch)
  const [name, setName] = useState('Saman Perera');
  const [email, setEmail] = useState('saman@example.com');
  const [phone, setPhone] = useState('0771234567');
  const [status, setStatus] = useState(true);
  const [role, setRole] = useState('User');
  const navigate = useNavigate();

  return (
    <Fade in timeout={600}>
      <Box maxWidth={500} mx="auto">
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#00bcd4,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Edit User
            </Typography>
            <Box component="form" display="flex" flexDirection="column" gap={2}>
              <TextField label="Name" required fullWidth value={name} onChange={e => setName(e.target.value)} />
              <TextField label="Email" required fullWidth value={email} onChange={e => setEmail(e.target.value)} />
              <TextField label="Phone" required fullWidth value={phone} onChange={e => setPhone(e.target.value)} />
              <TextField
                select
                label="Role"
                required
                fullWidth
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                {roles.map((r) => (
                  <MenuItem key={r} value={r}>{r}</MenuItem>
                ))}
              </TextField>
              <FormControlLabel
                control={<Switch checked={status} onChange={() => setStatus(!status)} color="primary" />}
                label={status ? 'Active' : 'Blocked'}
              />
              <Box display="flex" gap={2} mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg,#00bcd4,#8bc34a)',
                    borderRadius: 3,
                    fontWeight: 600,
                    flex: 1,
                    boxShadow: 3,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg,#8bc34a,#00bcd4)' },
                  }}
                  type="submit"
                >
                  Save Changes
                </Button>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 3, flex: 1 }}
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}
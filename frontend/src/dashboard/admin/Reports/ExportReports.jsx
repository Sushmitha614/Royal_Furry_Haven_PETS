import React from 'react';
import { Box, Typography, Card, CardContent, Fade, Button, TextField, MenuItem } from '@mui/material';

export default function ExportReports() {
  return (
    <Fade in timeout={600}>
      <Box maxWidth={500} mx="auto">
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#673ab7,#00bcd4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Export Reports
        </Typography>
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3 }}>
          <CardContent>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField label="Report Type" select fullWidth>
                <MenuItem value="sales">Monthly Sales</MenuItem>
                <MenuItem value="products">Product Trends</MenuItem>
                <MenuItem value="users">User Engagement</MenuItem>
                <MenuItem value="revenue">Revenue Summary</MenuItem>
              </TextField>
              <TextField label="Format" select fullWidth>
                <MenuItem value="pdf">PDF</MenuItem>
                <MenuItem value="csv">CSV</MenuItem>
                <MenuItem value="excel">Excel</MenuItem>
              </TextField>
              <TextField label="Date Range" type="date" InputLabelProps={{ shrink: true }} fullWidth />
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(90deg,#673ab7,#00bcd4)',
                  borderRadius: 3,
                  fontWeight: 600,
                  boxShadow: 3,
                  mt: 2,
                  '&:hover': { background: 'linear-gradient(90deg,#00bcd4,#673ab7)' },
                }}
              >
                Download Report
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}
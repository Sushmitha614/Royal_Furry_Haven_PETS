import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const cards = [
  {
    title: 'Total Sales',
    value: '$12,340',
    icon: <TrendingUpIcon fontSize="large" />,
    gradient: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
  },
  {
    title: 'Total Users',
    value: '1,234',
    icon: <PeopleIcon fontSize="large" />,
    gradient: 'linear-gradient(135deg, #fc67fa 0%, #f4c4f3 100%)',
  },
  {
    title: 'Orders',
    value: '567',
    icon: <ShoppingCartIcon fontSize="large" />,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
];

export default function OverviewCards() {
  return (
    <Grid container spacing={3}>
      {cards.map((card, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Card
            sx={{
              background: card.gradient,
              color: '#fff',
              borderRadius: 3,
              boxShadow: 3,
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.03)' },
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                {card.icon}
                <Box>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {card.value}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
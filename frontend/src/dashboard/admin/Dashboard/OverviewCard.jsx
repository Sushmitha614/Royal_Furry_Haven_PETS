import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AccountCircle, ShoppingCart, Assessment, Category } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '0.3s all ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
    },
  },
  icon: {
    color: '#2196f3',
    fontSize: '40px',
  },
  value: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333',
  },
}));

const OverviewCard = ({ title, value, icon }) => {
  const classes = useStyles();

  let Icon;
  switch (icon) {
    case 'user':
      Icon = AccountCircle;
      break;
    case 'shopping_cart':
      Icon = ShoppingCart;
      break;
    case 'assessment':
      Icon = Assessment;
      break;
    case 'category':
      Icon = Category;
      break;
    default:
      Icon = AccountCircle;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" color="textSecondary">{title}</Typography>
        <Typography className={classes.value}>{value}</Typography>
      </CardContent>
      <Box>
        <Icon className={classes.icon} />
      </Box>
    </Card>
  );
};

export default OverviewCard;

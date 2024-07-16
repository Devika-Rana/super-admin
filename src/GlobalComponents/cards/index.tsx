import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function DataCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{flex:1,alignItems:'center'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Total Users
        </Typography>
        <Typography variant="h5" component="div">
          10263
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          active
        </Typography>
        <Typography variant="body2">
            3100
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View More</Button>
      </CardActions>
    </Card>
  );
}
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

export default function Copyuter({ img, title, price, color, ram, brand, memory }) {
  return (
    <Card 
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt={title}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          ${price}
        </Typography>
        <Box mt={1}>
          <Typography variant="body2" color="text.secondary">Color: {color}</Typography>
          <Typography variant="body2" color="text.secondary">RAM: {ram}</Typography>
          <Typography variant="body2" color="text.secondary">Brand: {brand}</Typography>
          <Typography variant="body2" color="text.secondary">Memory: {memory}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const Card = ({ img, title, price, id }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <img style={{ width: '100%', height: 'auto' }} src={img} alt="Product" />
      <Stack p={2} spacing={1}>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${price}
        </Typography>
      </Stack>
    </Box>
  );
};

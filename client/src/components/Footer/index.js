import React from 'react'
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    }}>
      <Container sx={{
        p: 3,
      }}>
        <Typography variant='subtitle2' align='center'>©2022 Sub Tracker</Typography>
      </Container>
    </Box>
  )
};

export default Footer;


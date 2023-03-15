
import React from 'react'
import { Card, Typography, Container } from '@mui/material';

const SubCard = ({ name, price }) => {
  return (
    <Card variant='outlined' sx={{
      p: 2,
      m: 1,
      height: 300,
      width: 300,
      maxHeight: 300,
      maxWidth: 300,
    }}>
      <Container sx={{ p: 2 }}>
        <Typography variant='h6' align='center'>Sub Name: {name}</Typography>
      </Container>
      <Container sx={{ p: 2 }}>
        <Typography variant='subtitle1' align='center'>Sub Cost: {price}</Typography>
      </Container>
      <Container sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      </Container>
    </Card>
  )
};

export default SubCard;

import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Typography, Button, Container } from '@mui/material';

const SubCard = ({ info: { _id, subName, subCost } }) => {
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
        <Typography variant='h6' align='center'>{subName}</Typography>
      </Container>
      <Container sx={{ p: 2 }}>
        <Typography variant='subtitle1' align='center'>Sub Cost: {subCost}</Typography>
      </Container>
      <Container sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Link to={`/course/${_id}`} style={{ textDecoration: 'none' }}>
          <Button variant='contained'>View Subs</Button>
        </Link>
      </Container>
    </Card>
  )
};

export default SubCard;
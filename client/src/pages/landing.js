import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container, Box, Card } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const LandingPage= () => {
  return (
    <main>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
        <Typography variant='h4' align='center' sx={{ m: 8 }}>Welcome to Subs Tracker <AttachMoneyIcon /></Typography>
        <Container
          sx={{
            mb: 3,
          }}
        >
          <Typography variant='subtitle1' align='center'>Subs tracker is a tool that allows you to add and manage subscriptions that you use.</Typography>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Card variant='outlined' sx={{
            p: 2,
            m: 3,
            height: 400,
            width: 400,
            maxWidth: 400,
            maxHeight: 400,
            flex: 'auto'
          }}>
            <Typography variant='h4' align='center' sx={{ mb: 5, mt: 3 }}>Sign up for free today!</Typography>
            <Typography variant='h6' align='center' sx={{ mb: 3 }}>Join our Subs Tracker today with just a Username, Email, and Password by following the link below.</Typography>
            <Container sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Link to='/signup' style={{ textDecoration: 'none' }}><Button variant='contained'>Sign Up Now</Button></Link>
            </Container>
          </Card>
          <Card variant='outlined' sx={{
            p: 2,
            m: 3,
            height: 400,
            width: 400,
            maxWidth: 400,
            maxHeight: 400,
            flex: 'auto'
          }}>
            <Typography variant='h4' align='center' sx={{ mb: 5, mt: 3 }}>Already have an account with us?</Typography>
            <Typography variant='h6' align='center' sx={{ mb: 3 }}>Login with your credentials by following the link below.</Typography>
            <Container sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Link to='/login' style={{ textDecoration: 'none' }}><Button variant='contained'>Login now</Button></Link>
            </Container>
          </Card>
        </Container>
      </Box>
    </main>
  )
};

export default LandingPage;
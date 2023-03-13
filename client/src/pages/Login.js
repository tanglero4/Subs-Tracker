import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Typography, Button, Card, Container, Box } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token, data.login.user._id);
    } catch (error) {
      console.log(error);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
        <Typography variant='h4' align='center' sx={{ m: 8 }} gutterBottom>Welcome to Subs Tracker! <AttachMoneyIcon />. Login with your existing account below!</Typography>
        {data ? (
          <Typography variant='subtitle1'>Successfully logged in! You may now head{' '}<Link to='/'>back to the hompage.</Link></Typography>
        ) : (
          <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            m: 3,
          }}>
            <Card variant='outlined' sx={{
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              flex: 'auto'
            }}>
              <Typography variant='h4' align='center' gutterBottom>Login</Typography>
              <form onSubmit={handleFormSubmit}>
                <Container sx={{ p: 2 }}>
                  <TextField
                    label='Your email'
                    variant='outlined'
                    name='email'
                    type='email'
                    value={formState.email}
                    onChange={handleChange}
                  />
                </Container>
                <Container sx={{ p: 2 }}>
                  <TextField
                    label='Your password'
                    variant='outlined'
                    name='password'
                    type='password'
                    value={formState.password}
                    onChange={handleChange}
                  />
                </Container>
                <Container sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Button variant='contained' type='submit'>Login</Button>
                </Container>
              </form>
            </Card>
          </Container>
        )}

        {error && (
          <div>{error.message}</div>
        )}
      </Box>
    </main>
  );
};

export default Login;
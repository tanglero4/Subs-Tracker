import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Typography, Button, Card, Container, Box } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  /// UPDATES STATE BASED ON INPUT ///
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /// HANDLE SUBMISSION OF FORM ///
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token, data.addUser.user._id);
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <main>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
        <Typography variant='h4' align='center' sx={{ m: 8}} gutterBottom>Welcome to Sub Tracker <AttachMoneyIcon />. Let's get you signed up with a new account!</Typography>
        {data ? (
          <Typography variant='subtitle1'>Successfully created an account. You may now head{' '}<Link to='/'>back to the hompage.</Link></Typography>
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
              <Typography variant='h4' align='center' gutterBottom>Sign Up</Typography>
              <form onSubmit={handleFormSubmit}>
                <Container sx={{ p: 2 }}>
                  <TextField
                    label='Username'
                    variant='outlined'
                    name='username'
                    type='text'
                    value={formState.username}
                    onChange={handleChange}
                  />
                </Container>
                <Container sx={{ p: 2 }}>
                  <TextField
                    label='Email'
                    variant='outlined'
                    name='email'
                    type='text'
                    value={formState.email}
                    onChange={handleChange}
                  />
                </Container>
                <Container sx={{ p: 2 }}>
                  <TextField
                    label='Password'
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
                  <Button variant='contained' type='submit'>Sign Up</Button>
                </Container>
              </form>
            </Card>
          </Container>
        )}

        {error && (
          <div>
            {error.message}
          </div>
        )}
      </Box>
    </main>
  );
};

export default Signup;

import React, { useState } from 'react';

import { Box, Container, Typography, TextField, Button, Card } from '@mui/material';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
// import SubCard from '../components/SubCard/SubCard';
import { ADD_SUB } from '../utils/mutations';


function Home() {
  const [formState, setFormState] = useState({ name: '', price: '', pay_date: ''});
  const [addSub, {error}] = useMutation(ADD_SUB);

  // const { data: userdata } = Auth.getUser();

  //go get user from local storage 
  const userprofile = Auth.getProfile().data.username
  //use user to query database
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userprofile },
  });
  const user = data?.me || {};
  const subInfo = data?.me?.subscriptions || [];
  const subLength = data?.me?.subscriptions.length;
  console.log(user)
  // console.log(data)
  if (loading) {
    return <div>Loading...</div>;
  }



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("the state", formState)
    try {
      const { data } = await addSub({
        variables: {...formState}

      });
      console.log('data returned', data)
    } catch (error) {
      console.log(error);
    }

    setFormState({
      name: '',
      price: '',
      pay_date: '',
    });
  };

  if (loading) {
    return (
      <div>Loading, one moment please.</div>
    )
  }
  return (
    <main>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        p: 2,
      }}>
        <Container sx={{ flex: '2 1 400px', maxWidth: 700, display: 'flex', flexDirection: 'column', }}>
          <Typography variant='h4' sx={{ p: 3, mt: 3 }}>Welcome back {(data.me.username)}!</Typography>
          {subLength !== 0 ? (
            <>
              <Typography variant='h5' sx={{ p: 3 }}>Here is your subscriptions:</Typography>
              <Container sx={{
                display: 'flex',
                flexWrap: 'wrap',
              }}>
                {subInfo.map((sub) => ( <div key={sub._id}></div>
                  // <SubCard  key={sub._id} name={sub.name}  price={sub.price}/>
                ))}
              </Container>
            </>
          ) : (
            <div>
              <h2>You currently have no subscriptions, add a new one below.</h2>
            </div>
          )}
        </Container> 
        <Container sx={{
          display: 'flex',
          flex: '1 1 400px',
          minWidth: '250px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          mt: 8,
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
            <Typography variant='h4' align='center'>Add a New Subscription:</Typography>
            <form onSubmit={handleFormSubmit}>
              <Container sx={{ p: 2 }}>
                <TextField
                  label='name'
                  variant='outlined'
                  type='text'
                  name='name'
                  value={formState.name}
                  onChange={handleChange}
                />
              </Container>

              <Container sx={{ p: 2 }}>
                <TextField
                  id="outlined-multiline-flexible"
                  label='price'
                  variant='outlined'
                  multiline
                  rows={4}
                  type='number'
                  name='price'
                  value={formState.price}
                  onChange={handleChange}
                />
              </Container>
              <Container sx={{ p: 2 }}>
                <TextField
                  label='pay_date'
                  variant='outlined'
                  type='text'
                  name='pay_date'
                  value={formState.pay_date}
                  onChange={handleChange}
                />
              </Container>
              <Container sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Button variant='contained' type='submit'>Add Subscription</Button>
              </Container>
            </form>
          </Card>
        </Container>

        {error && (
          <div>
            {error.message}
          </div>
        )}
      </Box>
    </main>
  );
}

export default Home;

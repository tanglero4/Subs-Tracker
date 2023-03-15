import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Card } from '@mui/material';

import { useParams, Navigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_SUB } from '../utils/mutations';

import Auth from '../utils/auth';
import SubCard from '../components/SubCard/SubCard';


  // const totalcost = 0
  // sub.forEach((sub)=> totalcost += sub.Cost)
  // return(
  
  // <div>
  //   {sub && sub.map((sub,i)=> {return(<div key= {i}>{sub.subName} {sub.subCost}</div>)})}
  // </div>
  // )
  

const Dashboard = () => {

  const [formState, setFormState] = useState({ subName: '', subCost: '' });
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });
 

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }


  // const subInfo = data?.user?.subs;
  // const subLength = data?.user?.subs?.length;

  const [addSub, { error, subData }] = useMutation(ADD_SUB);

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
      const { moreData } = await addSub({
        variables: {
          ...formState,
          instructor: Auth.getUser().data.username,
        },
        refetchQueries: [
          { 
            query: QUERY_USER,
            variables: {
              userId: userId,
            } 
          },
        ],
      });
    } catch (error) {
      console.log(error);
    };

    setFormState({
      subName: '',
      subCost: '',
    });
  };

  if (loading) {
    return (
      <div>Loading, one moment please.</div>
    )
  };

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
          <Typography variant='h4' sx={{ p: 3, mt: 3 }}>Welcome back, {data.user.username}!</Typography>
          {subLength !== 0 ? (
            <>
              <Typography variant='h5' sx={{ p: 3 }}>Here is your subscriptions:</Typography>
              <Container sx={{
                display: 'flex',
                flexWrap: 'wrap',
              }}>
                {subInfo.map((sub) => (
                  <SubCard info={sub} key={sub._id} />
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
                  label='Sub Name'
                  variant='outlined'
                  type='text'
                  name='Sub Name'
                  value={formState.subName}
                  onChange={handleChange}
                />
              </Container>

              <Container sx={{ p: 2 }}>
                <TextField
                  id="outlined-multiline-flexible"
                  label='Sub Cost'
                  variant='outlined'
                  multiline
                  rows={4}
                  type='text'
                  name='description'
                  value={formState.subCost}
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
};

export default Dashboard;

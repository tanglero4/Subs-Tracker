
import React from 'react'
import { Card, Typography, Container } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { DELETE_SUB } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';


const SubCard = ({ name, price, id }) => {
  const [deleteSub, {error}] = useMutation(DELETE_SUB);
  console.log(id)
  const handleDeleteSubscription = async (id ) => {
    // get token
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    try {
      const { data } = await deleteSub({
        variables: { id } 
      });

      // upon success, remove book's id from localStorage
      deleteSub(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card variant='outlined' sx={{
      p: 2,
      m: 1,
      height: 300,
      width: 300,
      maxHeight: 300,
      maxWidth: 300,
    }}>
      <Container sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor:'#1976D2'}} >
        <Typography variant='h6' align='center'> {name}</Typography>
        <ClearIcon
  color="danger"
  disabled={false}
  onClick={()=> handleDeleteSubscription(id)}
  size="lg"
  variant="plain"
/>
      </Container>

      <Container sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#00241B'}}>
        <Typography variant='subtitle1' align='center'>Sub Cost: ${price}</Typography>
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
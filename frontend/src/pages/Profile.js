import * as React from 'react';
import { Container, } from '@mui/material';
import UserData from '../components/UserData';
import PageTitle from '../components/PageTitle';
import Purchases from '../components/Purchases';

const Profile = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "70vh", my: 10 }}>
      <PageTitle title="Profil" />
      <UserData />
      <Purchases />
    </Container>
  );
}

export default Profile;
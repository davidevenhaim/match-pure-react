import React, { useEffect, useState } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import Spinner from '../Layout/Spinner/Spinner';
import UserForm from '../components/UserForm';

// import SportImages from '../Layout/SportsImages/SportImages';

const SIGNUP_USER = gql`
  mutation signUp(
    $email: String!
    $username: String!
    $password: String!
    $favoriteSport: [favoriteSportSelection!]!
  ) {
    signUp(
      email: $email
      username: $username
      password: $password
      favoriteSport: $favoriteSport
    )
  }
`;
// "favoriteSport" type enum type representing athlete's favorite sport.

const signUp = props => {
  useEffect(() => {
    document.title = 'SignUp - Match&Roll';
  });

  const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      // storing the JWT in the local storage allowing user sessions.
      localStorage.setItem('token', data.signUp);
      // redirecting the user to the homepage.
      client.writeData({ data: { isLoggedIn: true } });
      props.history.push('/');
    }
  });

  return (
    <React.Fragment>
      <UserForm action={signUp} formType="signup" />
      {loading && <Spinner /> }
      {error && <p>Error while signing up.</p>}
    </React.Fragment>
  );
};

export default signUp;

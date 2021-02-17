import React, { useEffect, useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_UP, GET_ATHLETES } from '../gql/query';

import Spinner from '../Layout/Spinner/Spinner';
import UserForm from '../components/UserForm';

// import SportImages from '../Layout/SportsImages/SportImages';



// "favoriteSport" type enum type representing athlete's favorite sport.

const signUp = props => {
  useEffect(() => {
    document.title = 'SignUp - Match&Roll';
  });

  const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGN_UP, {
    refetchQueries: [{ query: GET_ATHLETES }],
    onCompleted: data => {
      console.log("Data - Signup");
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

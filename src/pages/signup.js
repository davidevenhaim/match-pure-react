import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';

import { GET_ATHLETES } from '../gql/query';
import { SIGN_UP } from '../gql/mutation';
import UserForm from '../components/UserForm';

// import styles
import Spinner from '../Layout/Spinner/Spinner';


// "favoriteSport" type enum type representing athlete's favorite sport.

const signUp = props => {
  useEffect(() => {
    document.title = 'SignUp - Match&Roll';
  });

  const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGN_UP, {
    refetchQueries: [{ query: GET_ATHLETES }],
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

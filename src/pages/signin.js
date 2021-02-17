import React, { useEffect } from 'react';
import { useApolloClient, useMutation, gql } from '@apollo/client';

import UserForm from '../components/UserForm';

// importing styles
import Spinner from '../Layout/Spinner/Spinner';

const SIGN_IN = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SignIn = props => {
  useEffect(() => {
    document.title = 'Sign In - Match&Roll';
  });

  const client = useApolloClient();

  const [ signIn, { loading, error }] = useMutation(SIGN_IN, {
      onCompleted: data => {
          localStorage.setItem('token', data.SignIn); // store the token.
          client.writeData({ data: { isLoggedIn: true }});
          props.history.push('/'); // redirecting.
      }
  })

  return (
      <React.Fragment>
          <UserForm action={signIn} formType="signin" />
          { loading && <Spinner />}
          { error && <p>Error signing in!</p>}
      </React.Fragment>
  );
};

export default SignIn;

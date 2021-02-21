import React, { useEffect } from 'react';
import { useApolloClient, useMutation } from '@apollo/client';

import { SIGN_IN } from '../gql/mutation';
import { GET_ATHLETES, GET_EVENTS } from '../gql/query';

import UserForm from '../components/UserForm';

// import styles
import Spinner from '../Layout/Spinner/Spinner';

const SignIn = props => {
  useEffect(() => {
    document.title = 'Sign In - Match&Roll';
  });

  const client = useApolloClient();

  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    refetchQueries: [{ query: GET_ATHLETES, GET_EVENTS }],
    onCompleted: data => {
      localStorage.setItem('token', data.signIn); // store the token.
      
      client.writeData({ data: { isLoggedIn: true } });
      console.log(props.location)
      if(props.location.state.from.pathname) { 
        // redirecting to the previous page, if exists.
        props.history.push(`${props.location.state.from.pathname}`)
      } else props.history.push('/'); // redirecting to Home
    }
  });

  return (
    <React.Fragment>
      <UserForm action={signIn} formType="signin" />
      {loading && <Spinner />}
      {error && <p>Email or Password is incorrect!</p>}
    </React.Fragment>
  );
};

export default SignIn;

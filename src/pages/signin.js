import React, { useEffect } from 'react';
import { useApolloClient, useMutation } from '@apollo/client';

import { SIGN_IN } from '../gql/mutation';
import { GET_ATHLETES, GET_EVENTS, GET_ME } from '../gql/query';

import LogInForm from '../components/LogInForm';

import Spinner from '../Layout/Spinner/Spinner';

const SignIn = props => {
  useEffect(() => {
    document.title = 'Sign In - Match&Roll';
  });
  // reRender

  const client = useApolloClient();
  
  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    
    onCompleted: data => {
      localStorage.setItem('token', data.signIn); // store the token.
      client.writeData({ data: { isLoggedIn: true } });
      if(props.location.state) { 
        // redirecting to the previous page, if exists.
        props.history.push(`${props.location.state.from.pathname}`)
      } else props.history.push('/');
    }
  });

  return (
    <React.Fragment>
      <LogInForm action={signIn} formType="signin" />
      {loading && <Spinner />}
      {error && <p>Email or Password is incorrect!</p>}
    </React.Fragment>
  );
};

export default SignIn;

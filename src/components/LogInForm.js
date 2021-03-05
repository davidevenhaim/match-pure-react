import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from './UI/Buttons/Button';
import SportSelection from './UI/SportSelection';

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    line-height: 2em;
  }


`;


const UserForm = props => {
  const [values, setValues] = useState();
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]:
        event.target.name === 'favoriteSport'
          ? event.target.value.split(', ')
          : // (', ') != (',') //
            event.target.value
    });
  };
  return (
    <Wrapper>
      {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
      <Form
        onSubmit={event => {
          event.preventDefault();
          props.action({
            variables: {
              ...values
            }
          });
        }}
      >
        {props.formType === 'signup' && (
          <React.Fragment>
            <label htmlFor="username"/>
            <input
              required
              type="text"
              name="username"
              placeholder="Username"
              onChange={onChange}
              style={{width:"100%", marginBottom: "2em", left:  "50%"}}
            />
            <SportSelection onChange={onChange}/>
          </React.Fragment>
        )}
        <label htmlFor="email" />
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          style={{width:"100%", marginBottom: "2em"}}
        />
        <label htmlFor="password" />
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          style={{width:"100%", marginBottom: "2em"}}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default UserForm;

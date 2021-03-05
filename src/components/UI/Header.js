import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';

import logo from '../../img/logo3.png';
import ButtonAsLink from './Buttons/ButtonAsLink';

import { GET_ATHLETES, GET_EVENTS } from '../../gql/query';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const UserState = styled.div`
  margin-left: auto;
`;

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const Header = props => {
  const { data, client } = useQuery(IS_LOGGED_IN, {
    // partialRefetch: [{ query: GET_ATHLETES, GET_EVENTS }]
  });

  const logOutHandler = () => {
    localStorage.removeItem('token');
    client.resetStore();
    client.writeData({ data: { isLoggedIn: false }})
    props.history.push('/signin');
  };

  return (
    <HeaderBar>
      <Link to={'/'} style={{textDecoration: "none"}}>
        <img src={logo} alt="Notedly Logo" height="40" />
        <LogoText>Match&Roll</LogoText>
      </Link>
      <UserState>
        {data.isLoggedIn ? (
          <ButtonAsLink onClick={logOutHandler}>
            Log Out
          </ButtonAsLink>
        ) : (
          <p>
            <Link to="/signin">Sign In </Link>
            or <Link to="/signup">Sign Up</Link>
          </p>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default withRouter(Header);

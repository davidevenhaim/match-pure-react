import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import image from '../img/user-form/lock-closed.svg'

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  /* We can nest styles in styled-components */
  /* The following styles will apply to links within the NavList component */
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">
            <span aria-hidden="true" role="img">
              🏠
            </span>
            Athletes Nearby
          </Link>
        </li>
        <li>
          <Link to="/events">
            <span aria-hidden="true" role="img">
              📓
            </span>
            Events Nearby
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <span aria-hidden="true" role="img">
              🌟
            </span>
            Connections
          </Link>
        </li>
        <li>
          <Link to="/newevent">
            <span aria-hidden="true" role="img">
              <img src={image} alt="lock" height="20px" />
            </span>
            New Event
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navigation;

import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
// import the format utility to help working with dates.
import { format } from 'date-fns';

import SportImages from '../Layout/SportsImages/SportImages';

const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserActions = styled.div`
  margin-left: auto;
`;

const athlete = ({ athlete }) => {
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
            src={athlete.avatar}
            alt={athlete.username + ' avatar'}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          {athlete.username}
          <br />
          {format(athlete.createdAt, 'MMM Do YYYY')}
          <br />
          {athlete.favoriteSport.map((sport, index) => (
            <img
              key={index}
              src={SportImages[sport]}
              alt={sport}
              height="30px"
            />
          ))}
        </MetaInfo>
        <UserActions>
          <em>Connect</em>
          {athlete.connection}
        </UserActions>
      </MetaData>
      <ReactMarkdown source={'Content'} />
    </StyledNote>
  );
};

export default athlete;

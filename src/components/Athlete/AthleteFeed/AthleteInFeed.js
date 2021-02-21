import React from 'react';
import styled from 'styled-components';

// styles import
import SportImage from '../../UI/SportImage';

import AthleteConnection from '../AthleteConnection';

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

const athlete = ({ athlete, isLoggedIn }) => {

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
          <SportImage sports={athlete.favoriteSport} height="30px" />
        </MetaInfo>
        <UserActions>
          {isLoggedIn ? (
            <AthleteConnection id={athlete.id} />
          ):
            <p>Log in to Connect!</p>
          }
        </UserActions>
      </MetaData>
      {/* <ReactMarkdown source={'Content'} /> */}
    </StyledNote>
  );
};

export default athlete;

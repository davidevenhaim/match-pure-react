import React from 'react';
import styled from 'styled-components';

import SportImage from '../../UI/SportImages';

import AthleteConnection from '../AthleteActions/AthleteConnection';

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

const athlete = ({ feedAthlete, curAthlete, itsMe }) => {
  // connected means that two athletes are "friends".
  let isConnected = false;
  
  if (curAthlete) {
    for (let connected of curAthlete.connection) {
      if (connected.id === feedAthlete.id) isConnected = true;
    }
  }
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
            src={feedAthlete.avatar}
            alt={feedAthlete.username + ' avatar'}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          {feedAthlete.username}
          <br />
          <p>GPS</p>
          <SportImage sports={feedAthlete.favoriteSport} height="30px" />
        </MetaInfo>
        {itsMe ? (
          <UserActions>Edit Info</UserActions>
        ) : (
          <UserActions>
            {curAthlete ? (
              isConnected ? null :<AthleteConnection id={feedAthlete.id}/>
            ) : (
              <p>Log in to Connect!</p>
            )}
          </UserActions>
        )}
      </MetaData>
      {/* <ReactMarkdown source={'Content'} /> */}
    </StyledNote>
  );
};

export default athlete;

import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
// import the format utility to help working with dates.
import { format } from 'date-fns';

import EventCaptainEdit from '../EventCaptainEdit';
import { IS_LOGGED_IN } from '../../../gql/query';

// styles import
import SportImage from '../../UI/SportImage';
import Spinner from '../../../Layout/Spinner/Spinner';

const StyledEvent = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: left;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserActions = styled.div`
  margin-left: auto;
`;

const Event = ({ event })=> {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <Spinner />;

  if (error) return <p>Error</p>;

  return (
    <StyledEvent>
      <MetaData>
        <MetaInfo>
          <p>IMAGE</p>
          <SportImage sports={event.sport} height="30px" />
        </MetaInfo>
        <MetaInfo>
          {event.eventName}
          <br />
          {format(event.eventDate, 'MMM Do')}
          <br />
          📓{event.curPlayersAmount}/{event.maxPlayersAmount}
          <UserActions>
            {data.isLoggedIn ? (
              <EventCaptainEdit event={event} />
            ) : (
              <p>Sign in to join!</p>
            )}
          </UserActions>
        </MetaInfo>
      </MetaData>
      {/* <ReactMarkdown source={'Content'} /> */}
    </StyledEvent>
  );
};

export default Event;

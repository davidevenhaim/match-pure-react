import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
// import the format utility to help working with dates.
import { format } from 'date-fns';

import SportImages from '../Layout/SportsImages/SportImages';

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

const Event = ({ event }) => (
  <StyledEvent>
    <MetaData>
      <MetaInfo>
      <p>IMAGE</p>
      <img src={SportImages[event.sport]} alt={SportImages[event.sport].key} height="30px"/>
      </MetaInfo>
      <MetaInfo>
        {event.eventName}
        <br />
        {format(event.eventDate, 'MMM Do YYYY')}
        <br />
        📓{event.curPlayersAmount}/{event.maxPlayersAmount}
      </MetaInfo>
      <UserActions>
        {event.private ? <em>Send request</em> : <em>Join</em>}
      </UserActions>
    </MetaData>
    <ReactMarkdown source={'Content'} />
  </StyledEvent>
);

export default Event;
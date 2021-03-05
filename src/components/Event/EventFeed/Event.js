import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'date-fns';

import SportImage from '../../UI/SportImages';

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

// const AthleteActions = styled.div`
//   margin-left: auto;
// `;

const Event = ({ event, isLoggedIn, curAthlete, path }) => {
  // TO DO:
  // don't show events that curAthlete is already participating.
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
        </MetaInfo>
      </MetaData>
      {/* <ReactMarkdown source={'Content'} /> */}
    </StyledEvent>
  );
};

export default Event;

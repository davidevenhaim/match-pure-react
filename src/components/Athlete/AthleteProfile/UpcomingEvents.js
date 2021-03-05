import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import styled from 'styled-components';

import SportImage from '../../UI/SportImages';
import EventJoin from '../../Event/EventActions/ToggleEventJoin';

const EventWrapper = styled.div`
max-width: 100%;
margin: 0 auto;
margin-bottom: 1em;
padding-bottom: 1em;
border-top: 3px solid #f5f4f0
border-bottom: 3px solid #f5f4f0;
border-left: 3px solid #f5f4f0
border-right: 3px solid #f5f4f0
`;

const upcomingEvents = ({ athlete, isOwner, myEvents }) => {
  const curEvents = athlete.upcomingEvents;
  let eventButtonText = null;

  if (!isOwner) {
    console.log('not owner');
    for (let myEventId in myEvents.id) {
      for (let curEventId in curEvents.id) {
        if (myEventId === curEventId) {
          eventButtonText = 'See more';
        }
      }
    }
  } else {
    eventButtonText = 'See more'
  }

  const upcomingEvents = curEvents.map(event => {
    if (eventButtonText === null) {
      eventButtonText = (
        <EventJoin eventId={event.id} athlete={athlete} btnText="Join" />
      );
    }
    return (
      <Link to={`/event/${event.id}`} style={{textDecoration: "none"}} key={event.id}>
        <EventWrapper>
          <SportImage sports={event.sport} height="100px" />
          <p>{event.eventName}</p>
          <p>
            {format(event.eventDate, 'Do MMM')}
            <SportImage sports={event.sport} height="30px" />
          </p>
          <p>
            {event.curPlayersAmount}/{event.maxPlayersAmount}
          </p>
          <p>{eventButtonText}</p>
        </EventWrapper>
      </Link>
    );
  });
  return (
    <React.Fragment>
      {isOwner ? <p>My Events:</p> : <p>Upcoming Events:</p>}
      {upcomingEvents}
    </React.Fragment>
  );
};

export default upcomingEvents;

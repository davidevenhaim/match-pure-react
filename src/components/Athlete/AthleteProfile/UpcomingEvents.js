import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import SportImage from '../../UI/SportImage';

const upcomingEvents = ({ isOwner, curEvents, myEvents }) => {
  let eventButtonText = 'Join';
  return (
    <React.Fragment>
      {/* a message to unregistered users. */}
      {myEvents === null ? <p>Sign Up to start playing!</p> : null}
      {isOwner ? <p>My Events:</p> : <p>Upcoming Events:</p>}
      {curEvents.map(event => {
          if(!isOwner && myEvents) for (let myEvent of myEvents) {
            if (event.id === myEvent.id) eventButtonText = 'Common Event';
            // check if event are in common with athlete or 
            // he should be offered to join the event.
          }
        return (
          <React.Fragment key={event.id}>
            <p>
              {format(event.eventDate, 'Do MMM')}
              <SportImage sports={event.sport} height="30px" />
            </p>
            <p>
              {event.curPlayersAmount}/{event.maxPlayersAmount}
            </p>
            <Link to="/">{eventButtonText}</Link>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default upcomingEvents;

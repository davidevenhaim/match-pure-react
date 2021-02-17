import React from 'react';
import Event from './Event';
import styled from 'styled-components';

const EventWrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-top: 3px solid #f5f4f0
  border-bottom: 3px solid #f5f4f0;
  border-left: 3px solid #f5f4f0
  border-right: 3px solid #f5f4f0
`; // pinterest look a like grid.

const EventFeed = ({ events }) => {
  return (
    <div>
      {events.map(event => (
          <EventWrapper key={event.id}>
            <Event event={event} />
          </EventWrapper>
        )
      )}
    </div>
  );
};

export default EventFeed;

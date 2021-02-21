import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Event from './Event';

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

const EventFeed = ({ events }) => (
  <div>
    {events.map(event => (
      <Link
        key={event.id}
        to={`/event/${event.id}`}
        style={{ textDecoration: 'none' }}
      >
        <EventWrapper>
          <Event event={event} />
        </EventWrapper>
      </Link>
    ))}
  </div>
);

export default EventFeed;

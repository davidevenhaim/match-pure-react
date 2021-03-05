import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { IS_LOGGED_IN, GET_ME } from '../../../gql/query';

import Event from './Event';
import Spinner from '../../../Layout/Spinner/Spinner';

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
  const {
    loading: loginLoading,
    error: errorLoading,
    data: dataLoading
  } = useQuery(IS_LOGGED_IN);

  const { loading: meLoading, error: meError, data: meData } = useQuery(GET_ME);

  if (loginLoading || meLoading) return <Spinner />;
  // if meError is TRUE, user is not logged in.
  if (errorLoading) return <p>Error</p>;
  const isAthleteMember = event => {
    if (dataLoading.isLoggedIn) {
      for (let athleteEvent of meData.Me.upcomingEvents) {
        if (athleteEvent.id === event.id) {
          return true;
        }
      }
    return false;  
    }
  };

  return (
    <div>
      {console.log('[eventFeed] return')}
      {events.map(event => {
        const path = `/event/${event.id}`;
        if(isAthleteMember(event)) return null; // not showing events athlete is member in.
        return (
          <Link key={event.id} to={path} style={{ textDecoration: 'none' }}>
            <EventWrapper>
              <Event
                event={event}
                isLoggedIn={dataLoading.isLoggedIn}
                path={path}
              />
            </EventWrapper>
          </Link>
        );
      })}
    </div>
  );
};

export default EventFeed;

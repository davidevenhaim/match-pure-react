import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';


import EventFeed from '../components/EventFeed';

// styling imports
import Spinner from '../Layout/Spinner/Spinner';

const GET_EVENTS = gql`
  query Events($cursor: String) {
    Events(cursor: $cursor) {
      cursor
      hasNextPage
      events {
        id
        eventDate
        eventName
        private
        maxPlayersAmount
        curPlayersAmount
        sport
      }
    }
  }
`;

const Events = () => {
  useEffect(() => {
    // update the document title
    document.title = 'My Notes — Notedly';
  });

  const { data, loading, error, fetchmore } = useQuery(GET_EVENTS);

  if(loading) return ( <Spinner /> );
  // avoid reading from undefined.
  if(error) return  ( <Spinner /> );

  return (
    <div>
      <EventFeed events={data.Events.events} />
    </div>
  );
};

export default Events;

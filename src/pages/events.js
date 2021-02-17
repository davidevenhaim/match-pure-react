import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../gql/query';

import EventFeed from '../components/EventFeed';

// styling imports
import Spinner from '../Layout/Spinner/Spinner';

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

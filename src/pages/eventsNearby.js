import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../gql/query';

import EventFeed from '../components/Event/EventFeed/EventFeed';

import Spinner from '../Layout/Spinner/Spinner';

const Events = () => {
  useEffect(() => {
    document.title = 'My Notes — Notedly';
  });
  
  
  const { data, loading, error, fetchmore } = useQuery(GET_EVENTS);

  if(loading) return ( <Spinner /> );

  if(error){
    return  (
      <div>
        <Spinner />
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div>
      <EventFeed events={data.Events.events}/>
    </div>
  );
};

export default Events;

import React from 'react';
import { useQuery } from '@apollo/client';

import EventFeed from '../../components/Event/EventFeed/EventFeed';
import { GET_MY_EVENTS } from '../../gql/query';

import Spinner from '../../Layout/Spinner/Spinner';

const myEvents = () => {
  const { loading, error, data } = useQuery(GET_MY_EVENTS);

  if (loading) return <Spinner />;

  if (error) return <p>Error! {error.message} </p>;

  if (!data.Me.upcomingEvents.length) return <p>NO EVENTS YET MESSAGE!</p>;

  return <EventFeed events={data.Me.upcomingEvents} />;
};

export default myEvents;

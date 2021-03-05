import React, { useEffect } from 'react';
import { useQuery, useApolloClient } from '@apollo/client';

import Event from '../components/Event/EventFeed/Event';
import ToggleEventJoin from '../components/Event/EventActions/ToggleEventJoin';
import { GET_EVENT, GET_ME } from '../gql/query';

import Spinner from '../Layout/Spinner/Spinner';

const eventPage = props => {
  const id = props.match.params.id;

  const {
    loading: eventLoading,
    error: eventError,
    data: eventData
  } = useQuery(GET_EVENT, { variables: { id } });

  const { loading: meLoading, data: meData } = useQuery(GET_ME);

  if (eventLoading || meLoading ) return <Spinner />;

  if (eventError) return <p>ERROR! {error.message}</p>;

  return (
    <div>
      <Event event={eventData.Event} />
      <ToggleEventJoin eventId={id} athlete={meData ? meData.Me : null} />
    </div>
  );
};

export default eventPage;

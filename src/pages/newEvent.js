import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { GET_EVENTS } from '../gql/query';
import { NEW_EVENT } from '../gql/mutation';

// styling imports
import Spinner from '../Layout/Spinner/Spinner';

// components imports
import NewEventForm from '../components/Event/NewEventForm';

const newEvent = props => {
  useEffect(() => {
    document.title = 'New Event Page';
  });

  const [newEvent, { loading, error }] = useMutation(NEW_EVENT, {
    refetchQueries: [{ query: GET_EVENTS }],
    onCompleted: data => {
      props.history.push(`/event/${data.newEvent.event.id}`);
    }
  });

  return (
    <React.Fragment>
      {loading && <Spinner />}
      {error && <p>Error</p>}
      <NewEventForm action={newEvent} />
    </React.Fragment>
  );
};

export default newEvent;

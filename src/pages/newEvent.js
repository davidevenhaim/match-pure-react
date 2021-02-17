import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';

// styling imports
import Spinner from '../Layout/Spinner/Spinner';

// components imports
import NewEventForm from '../components/NewEventForm';

const NEW_EVENT = gql`
  mutation newEvent( $sport: favoriteSportSelection! $maxPlayersAmount: Int! $eventDate: Date!) {
    newEvent( sport: $sport eventDate: $eventDate maxPlayersAmount: $maxPlayersAmount) {
      alert
      succeed
      event {
        id
        eventDate
        eventName
        maxPlayersAmount
        sport
        captain {
          username
        }
      }
    }
  }
`;

const newEvent = () => {
  useEffect(() => {
    document.title = 'New Event Page';
  });

  const [data, { loading, error }] = useMutation(NEW_EVENT, {
      onCompleted: data => {
          props.history.push(`/event/${data.event.id}`)
      }
    });

  return (
    <React.Fragment>
        { loading && <Spinner />}
        { error && <p>Error</p> }
      <NewEventForm action={data} />
    </React.Fragment>
  );
};

export default newEvent;

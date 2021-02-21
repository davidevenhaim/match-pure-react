import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

// import styles
import Spinner from '../../../Layout/Spinner/Spinner';

import EventForm from '../../../components/Event/NewEventForm';
import { GET_EVENT, GET_ME, GET_EVENTS, GET_MY_EVENTS } from '../../../gql/query';
import { EDIT_EVENT_CAPTAIN } from '../../../gql/mutation';

const editEvent = props => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(GET_EVENT, { variables: { id } });
  const { data: curUserData } = useQuery(GET_ME);

  const [editEvent] = useMutation(EDIT_EVENT_CAPTAIN, {
    variables: {
      id
    },
    refetchQueries: [{ query: GET_MY_EVENTS, GET_EVENTS, GET_EVENT}],
    onCompleted: () => {
      props.history.push(`/event/${id}`);
    }
  });

  if (loading) return <Spinner />;

  if (error) return <p>Error {error.message}</p>;

  if (curUserData.Me.id !== data.Event.captain.id) {
    alert('Only captain can edit event information');
    <Redirect to={`/event/${id}`} />

  }
  return <EventForm content={data.Event} action={editEvent} />;
};

export default editEvent;

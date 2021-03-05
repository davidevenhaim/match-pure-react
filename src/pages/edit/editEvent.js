import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import Spinner from '../../Layout/Spinner/Spinner';

import EventForm from '../../components/Event/EventForm/NewEventForm';

import { GET_EVENT, GET_ME, GET_EVENTS, GET_MY_EVENTS } from '../../gql/query';
import { EDIT_EVENT } from '../../gql/mutation';

const editEvent = props => {
  const id = props.match.params.id;
  console.log(props)
  const { loading, error, data } = useQuery(GET_EVENT, { variables: { id } });
  const { data: meData, error: meError } = useQuery(GET_ME);

  const [editEvent] = useMutation(EDIT_EVENT, {
    variables: {
      id
    },
    refetchQueries: [{ query: GET_MY_EVENTS, GET_EVENTS, GET_EVENT}],
    onCompleted: () => {
      props.history.push(`/event/${id}`);
    }
  });

  if (loading) return <Spinner />;
  console.log(meError)
  if (error) return <p>Error {error.message}</p>;
  console.log(meData)
  if (meData.Me.id !== data.Event.captain.id) {
    alert('Only captain can edit event information');
    <Redirect to={`/event/${id}`} />

  }
  return <EventForm eventContent={data.Event} action={editEvent} />;
};

export default editEvent;

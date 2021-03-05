import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

import { EDIT_EVENT} from '../../../gql/mutation';
import { GET_EVENTS } from '../../../gql/query';

import formImages from '../../../Layout/icons/UserForm/newEventImages';

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 50%;
    margin-bottom: 1em;
  }
`;

const EventCaptainEdit = ({ event, athleteId}) => { 
    const [values, setValues] = useState();
    let isCaptain = false;
    let newEventDate = null;
    let newPlayersAmount = null;
    let newPrivate = null;

    const onChange = e => {
      setValues({
        ...values,
        [e.target.name]: +e.target.value ? +e.target.value : e.target.value
      });
    };
    
    const [ editEvent ] = useMutation(EDIT_EVENT, {
        variables: {
            id: event.id,
            eventDate: newEventDate,
            maxPlayersAmount: newPlayersAmount,
            private: newPrivate,
        },
        refetchQueries: [{ query: GET_EVENTS }],
    })

    if(event.captain.id === athleteId) {
        isCaptain = true;
    }

    return (
        <p>none</p>
    )
}

export default EventCaptainEdit;
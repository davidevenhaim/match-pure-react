import React from 'react';
import { useMutation } from '@apollo/client'

import { TOGGLE_JOIN_EVENT } from '../../../gql/mutation';
import { GET_EVENTS, GET_MY_EVENTS } from '../../../gql/query';

import ButtonAsLink from '../../UI/Buttons/ButtonAsLink';

const ToggleEventJoin = ({ eventId, btnText, athlete }) => {
    if(!btnText) btnText = 'Join';
    
    const [ toggleJoinEvent ]  = useMutation(TOGGLE_JOIN_EVENT, {
        variables: {
            id: eventId
        },
        refetchQueries: [{ query: GET_EVENTS, GET_MY_EVENTS }],
        onError: (error) => {
            console.log(error.message)
        }
    });
    if(athlete) {
        for(let athleteEvent of athlete.upcomingEvents) {
            if(athleteEvent.id === eventId) {
                btnText = 'Exit';
                break;
            }
        }
    }
    return (
        <ButtonAsLink onClick={toggleJoinEvent}>{btnText}</ButtonAsLink>
    )
}

export default ToggleEventJoin;
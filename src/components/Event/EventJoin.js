import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client'

import { TOGGLE_JOIN_EVENT } from '../../gql/mutation';
import { GET_EVENTS, GET_MY_EVENTS } from '../../gql/query';

// import styles
import ButtonAsLink from '../UI/Buttons/ButtonAsLink';

const EventJoin = ( props ) => {
    const id = props.id;

    const redirectToEvent = () => {
        props.history.push(`/event/${id}`);
    }
    
    const [ toggleJoinEvent ]  = useMutation(TOGGLE_JOIN_EVENT, {
        variables: {
            id
        },
        refetchQueries: [{ query: GET_EVENTS, GET_MY_EVENTS }],
        onCompleted: () => {
            redirectToEvent();
        },
        onError: (error) => {
            console.log(error.message)
        }
    });

    const { loading, error, data } = useQuery(GET_MY_EVENTS);
    
    if(loading) return null;

    if(error) return <p>{error.message}</p>

    for(let myEvent of data.Me.upcomingEvents) {
        if(id === myEvent.id) return (<ButtonAsLink onClick={redirectToEvent}>
            YOUR EVENT!
        </ButtonAsLink>)
    }
    return (
        <ButtonAsLink onClick={toggleJoinEvent}>Join</ButtonAsLink>
    )
}

export default withRouter(EventJoin);
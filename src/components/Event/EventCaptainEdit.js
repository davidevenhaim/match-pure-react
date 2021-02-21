import React from 'react';
import { Link } from 'react-router-dom'; 
import { useQuery } from '@apollo/client';

import EventJoin from './EventJoin';
import { GET_ME } from '../../gql/query';

// styles import
import Spinner from '../../Layout/Spinner/Spinner';

const EventCaptainEdit = props => { 
    const { loading, error, data } = useQuery(GET_ME);
    let link = null;

    if(loading) return <Spinner />

    if(data.Me.id === props.event.captain.id) {
        link = (
            <Link to={`/event/${props.event.id}`}>
                Edit
            </Link>
        );
    } else {
        if(props.event.private) {
            link = ( <p>Send request</p> );
        } else link = <EventJoin id={props.event.id} />
    }

    return (
        <React.Fragment>
            {link}
        </React.Fragment>
    )
}

export default EventCaptainEdit;
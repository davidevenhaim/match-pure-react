import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import Event from '../components/Event/EventFeed/Event';
import { GET_EVENT } from '../gql/query';

// import styles
import Spinner from '../Layout/Spinner/Spinner';

const eventPage = props => {

    const id = props.match.params.id;

    const { loading, error, data } = useQuery(GET_EVENT, { variables: { id } });

    // const data = null
    if(loading) return ( <Spinner /> );
    // avoid reading from undefined.
    if(error) return  ( <p>ERROR! {error.message}</p> );
    
    return (
        <div>
            <Event event={data.Event} />
        </div>
    );
};

export default eventPage;

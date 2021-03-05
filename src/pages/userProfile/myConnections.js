import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_MY_CONNECTIONS } from '../../gql/query';

import Spinner from '../../Layout/Spinner/Spinner';

const myConnections = () => {
  const { loading, error, data } = useQuery(GET_MY_CONNECTIONS);

  if (loading) return <Spinner />;

  if (error) return <p>Error! {error.message} </p>;

  if (data.Me.connection.length === 0)
    return <p>NO CONNECTIONS YET MESSAGE!</p>;

  return (
    <React.Fragment>
      {data.Me.connection.map(connect => (
        <p key={connect.id}>
          <img src={connect.avatar} alt={connect.username} />
          {connect.username}
        </p>
      ))}
    </React.Fragment>
  );
};

export default myConnections;

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ATHLETES } from '../gql/query';

import AthleteFeed from '../components/Athlete/AthleteFeed/AthleteFeed';

// layout imports
import Spinner from '../Layout/Spinner/Spinner';

const athletesPage = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_ATHLETES);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div>
        <Spinner />
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <AthleteFeed athletes={data.Athletes.athletes} />
    </div>
  );
};

export default athletesPage;

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ATHLETES } from '../gql/query';

import AthleteFeed from '../components/AthleteFeed';

// layout imports
import Spinner from '../Layout/Spinner/Spinner';

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_ATHLETES);

  if(loading) {
    return ( <Spinner />)
  }

  if(error) {
    return ( <p>Error! data could not load.</p> )
  }

  return (
    <div>
      <AthleteFeed athletes={data.Athletes.athletes}/>
      <p>The data is loaded!</p>
    </div>
  );
};

export default Home;

import React from 'react';
import { useQuery, gql } from '@apollo/client';

import AthleteFeed from '../components/AthleteFeed';

// layout imports
import Spinner from '../Layout/Spinner/Spinner';

const GET_ATHLETES = gql`
  query Athletes($cursor: String) {
    Athletes(cursor: $cursor) {
      cursor
      hasNextPage
      athletes {
        id
        username
        favoriteSport
        avatar
        createdAt
        connection {
          username
        }
      }
    }
  }
`;

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

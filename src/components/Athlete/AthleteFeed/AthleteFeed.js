import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AthleteInFeed from './AthleteInFeed';
import { IS_LOGGED_IN, GET_ME } from '../../../gql/query';

import styled from 'styled-components';
import Spinner from '../../../Layout/Spinner/Spinner';

const AthleteWrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-top: 3px solid #f5f4f0
  border-bottom: 3px solid #f5f4f0;
  border-left: 3px solid #f5f4f0
  border-right: 3px solid #f5f4f0
`;

const athleteFeed = ({ athletes }) => {
  const { loading: logLoading, error: logError, data: logData } = useQuery(
    IS_LOGGED_IN
  );
  const { loading: meLoading, error: meError, data: meData } = useQuery(GET_ME);

  if (logLoading || meLoading) return <Spinner />;

  // if meError is TRUE use may not be logged in - still needs to show Athlete's feed.
  if (logError) return <p>Error!</p>;

  return (
    <div>
      {logData.isLoggedIn ? (
        <Link
          to={`/athlete/${meData.Me.id}`}
          style={{ textDecoration: 'none' }}
        >
          <AthleteInFeed athlete={meData.Me} isLoggedIn={logData.isLoggedIn} />
        </Link>
      ) : null}
      {athletes.map(athlete => {
        if (logData.isLoggedIn) {
          if (meData.Me.id === athlete.id) {
            return null;
          }
        }
        return (
          <Link
            to={`/athlete/${athlete.id}`}
            key={athlete.id}
            style={{ textDecoration: 'none' }}
          >
            <AthleteWrapper>
              <AthleteInFeed
                athlete={athlete}
                isLoggedIn={logData.isLoggedIn}
              />
            </AthleteWrapper>
          </Link>
        );
      })}
    </div>
  );
};

export default athleteFeed;

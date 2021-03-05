import React from 'react';
import { useApolloClient, useQuery } from '@apollo/client';

import { GET_ME, GET_ATHLETE } from '../gql/query';
import AthleteHeader from '../components/Athlete/AthleteProfile/AthleteHeader';
import UpcomingEvents from '../components/Athlete/AthleteProfile/UpcomingEvents';

import Spinner from '../Layout/Spinner/Spinner';

const profilePage = props => {
  const id = props.match.params.id;
  let isOwner = false;
  let isConnected = false;

  const {
    loading: athleteLoading,
    error: athleteError,
    data: athleteData
  } = useQuery(GET_ATHLETE, { variables: { id } });

  const { loading: meLoading, data: meData, error: meError } = useQuery(GET_ME);

  if (athleteLoading || meLoading) return <Spinner />;

  if (athleteError) return <p>ERROR!</p>;

  if (!meError) {
    isOwner = id === meData.Me.id;
    for (let connected of meData.Me.connection) {
      if (connected.id === id) isConnected = true;
    }
  }

  const athlete = athleteData.Athlete;

  return (
    <React.Fragment>
      <AthleteHeader
        isOwner={isOwner}
        avatar={athlete.avatar}
        sports={athlete.favoriteSport}
        username={athlete.username}
        isConnected={isConnected}
      />
      <UpcomingEvents
        athlete={athlete}
        isOwner={isOwner}
        myEvents={meError ? null : meData.Me.upcomingEvents}
      />
    </React.Fragment>
  );
};

export default profilePage;

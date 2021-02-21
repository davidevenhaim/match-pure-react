import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ME, GET_ATHLETE } from '../gql/query';
import AthleteHeader from '../components/Athlete/AthleteProfile/AthleteHeader';
import UpcomingEvents from '../components/Athlete/AthleteProfile/UpcomingEvents';

// styles import
import Spinner from '../Layout/Spinner/Spinner';

const profilePage = props => {
  const id = props.match.params.id;
  let isOwner = null;
  const {
    loading: userLoading,
    error: userError,
    data: userData
  } = useQuery(GET_ATHLETE, { variables: { id } });

  const { loading: meLoading, data: meData, error: meError } = useQuery(GET_ME);

  if (userLoading || meLoading) return <Spinner />;

  if (userError) return <p>ERROR!</p>;
  
  if(!meError) {
    isOwner = ( id === meData.Me.id );
  }
  const user = userData.Athlete;
  
  return (
    <React.Fragment>
      <AthleteHeader
        isOwner={isOwner}
        avatar={user.avatar}
        sports={user.favoriteSport}
        username={user.username}
      />
      <UpcomingEvents
        curEvents={user.upcomingEvents}
        isOwner={isOwner}
        myEvents={meError ? null : meData.Me.upcomingEvents}
      />
    </React.Fragment>
  );
};

export default profilePage;

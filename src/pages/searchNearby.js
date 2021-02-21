import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SignUpIcons from '../Layout/icons/SignUp/finalStep';

const searchNearBy = () => {
  useEffect(() => {
    document.title = `Explore who's nearby`;
  });

  return (
    <React.Fragment>
        <img src={SignUpIcons.FirstLogo} alt="logo" />
      <Link to={'/athletes'}>
        <img src={SignUpIcons.AthletesNearby} alt="athletes-nearby" />
      </Link>
      <Link to={'/events'}>
        <img src={SignUpIcons.EventsNearby} alt="events-nearby" />
      </Link>
      <p style={{textAlign:'center'}}>Athletes Nearby Events Nearby</p>
      <p>
      <img src={SignUpIcons.ProgressBar3} alt="step-3" />
      </p>
    </React.Fragment>
  );
};

export default searchNearBy;

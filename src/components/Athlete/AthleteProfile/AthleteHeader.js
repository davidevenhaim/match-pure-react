import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AthleteConnection from '../AthleteActions/AthleteConnection';

import AthleteIcons from '../../../Layout/icons/athleteIcons';
import SportImages from '../../UI/SportImages';

const athleteHeader = props => {
  const curUrl = props.match.url;
  const athleteId = props.match.params.id;
  const { isOwner, avatar, sports, username, isConnected } = props;

  let addSportsButton = null;
  let navigationLinks = null;

  if (isOwner) {
    addSportsButton = (
      <Link to={`${curUrl}/edit`}>
        <img
          src={AthleteIcons.addSportsButton}
          alt="addsportbutton"
          height="30px"
        />
      </Link>
    );
    navigationLinks = (
      <p>
        <Link to="/">
          <img src={AthleteIcons.chats} alt="mychats" height="30px" />
        </Link>
        <Link to="/">
          <img
            src={AthleteIcons.notification}
            alt="notification"
            height="30px"
          />
        </Link>
        <Link to="/">
          <img
            src={AthleteIcons.userSettings}
            alt="usersettings"
            height="30px"
          />
        </Link>
      </p>
    );
  } else {
    // current user is visiting others profile.
    navigationLinks = (
      <p>
        {isConnected ? (
          <Link to="/">
            <img src={AthleteIcons.sendMessage} alt="sendmessage" />
          </Link>
        ) : (
          <AthleteConnection id={athleteId} />
        )}
      </p>
    );
  }

  return (
    <React.Fragment>
      <img src={avatar} alt="userAvatar" />
      <p>{username}</p>
      <p>
        {addSportsButton}
        <SportImages sports={sports} height="30px" />
      </p>
      {navigationLinks}
    </React.Fragment>
  );
};

export default withRouter(athleteHeader);

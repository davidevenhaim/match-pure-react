import React from 'react';
import { Link } from 'react-router-dom';

// styles import
import AthleteIcons from '../../../Layout/icons/athleteIcons';
import SportImage from '../../UI/SportImage';

const profileHeader = ({ isOwner, avatar, sports, username }) => {
  let addSportsButton = null;
  let navigationLinks = null;

  // if current user is watching is own profile.
  if (isOwner) {
    addSportsButton = (
      <Link to="/">
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
        <Link to="/">
          <img src={AthleteIcons.connect} alt="connect" />
        </Link>
        <Link to="/">
          <img src={AthleteIcons.sendMessage} alt="sendmessage" />
        </Link>
      </p>
    );
  }

  return (
    <React.Fragment>
      <img src={avatar} alt="userAvatar" />
      <p>{username}</p>
      <p>
        {/* adding add sport button before all sports. */}
        {addSportsButton}
        <SportImage sports={sports} height="30px" />
      </p>
      {navigationLinks}
    </React.Fragment>
  );
};

export default profileHeader;

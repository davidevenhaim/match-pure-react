import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { GET_CONNECTED } from '../../gql/mutation';
import { GET_ATHLETES, GET_MY_CONNECTIONS } from '../../gql/query';

import ButtonAsLink from '../UI/Buttons/ButtonAsLink';

import AthleteIcons from '../../Layout/icons/athleteIcons';

const athleteConnection = (props) => {
  let buttonClicked = false;
  const id = props.id;
  const [getConnected] = useMutation(GET_CONNECTED, {
    variables: {
      id
    },

    refetchQueries: [{ query: GET_MY_CONNECTIONS, GET_ATHLETES }],

    onCompleted: () => {
      console.log(buttonClicked);
      props.history.push(`/athlete/${id}`)
    },

    onError: error => {
      console.log(error.message);
    }
  });

  return (
    <React.Fragment>
      {buttonClicked ? null : (
        <ButtonAsLink onClick={getConnected}>
          <img src={AthleteIcons.connect} alt="connect" height="45px" />
        </ButtonAsLink>
      )}
    </React.Fragment>
  );
};

export default withRouter(athleteConnection);

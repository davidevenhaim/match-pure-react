import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../gql/query';

import Layout from '../components/UI/Layout';
import Spinner from '../Layout/Spinner/Spinner';

import OnboardingPage from './signUp/onboardingPage';
import SignUp from './signup';
import SignIn from './signin';
import AthletesNearby from './athletesNearby';
import SearchNearBy from './searchNearby';
import AthletePage from './athletePage';
import EventsNearby from './eventsNearby';
import EventPage from './eventPage';
import NewEvent from './newEvent';
import MyEvents from './userProfile/myEvents';
import EditEvent from './edit/editEvent';
import EditAthlete from './edit/editAthlete';
import MyConnections from './userProfile/myConnections';

const Pages = () => {

  return (
    <Router>
      <Layout>
        <Route exact path="/signup" component={OnboardingPage} />
        <Route exact path="/signup1" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={SearchNearBy} />
        <Route exact path="/athletes" component={AthletesNearby} />
        <Route path="/athlete/:id" component={AthletePage} exact />
        <Route path="/events" component={EventsNearby} />
        <Route path="/event/:id" component={EventPage} exact />
        <Route path="/myprofile/:id" component={SearchNearBy} exact />
        <PrivateRoute path="/event/:id/edit" component={EditEvent} />
        <PrivateRoute path="/athlete/:id/edit" component={EditAthlete} />
        <PrivateRoute path="/newevent" component={NewEvent} />
        <PrivateRoute path="/myevents" component={MyEvents} />
        <PrivateRoute path="/myconnections" component={MyConnections} />
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
   if(loading) return <Spinner />;

  if (error) return <p>Error!</p>;

  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: 'signin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Pages;

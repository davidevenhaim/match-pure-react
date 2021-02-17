// import React and our routing dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../gql/query';

// import our shared layout component
import Layout from '../components/Layout';
import Spinner from '../Layout/Spinner/Spinner';

// import our routes
import Home from './home';
import Favorites from './favorites';
import AthletePage from './athletePage';
import SignUp from './signup';
import SignIn from './signin';

import Events from './events';
import NewEvent from './newEvent';
import EventPage from './eventPage';


const Pages = props => {
  return (
    // define our routes
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/events" component={Events} />
        <PrivateRoute path="/favorites" component={Favorites} />
        <PrivateRoute path="/newevent" component={NewEvent} />
        <Route path="/athlete/:id" component={AthletePage} exact />
        <Route path="/event/:id" component={EventPage} exact />
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <Spinner />;
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

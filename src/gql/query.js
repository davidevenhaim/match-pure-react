import { gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const GET_ME = gql`
  query Me {
    Me {
      id
      username
      favoriteSport
      avatar
      createdAt
      upcomingEvents {
        id
        eventDate
        sport
        curPlayersAmount
        maxPlayersAmount
      }
      connection {
        id
        avatar
        username
      }
    }
  }
`;

const GET_MY_EVENTS = gql`
  query Me {
    Me {
      id
      avatar
      username
      upcomingEvents {
        id
        eventDate
        eventName
        curPlayersAmount
        maxPlayersAmount
        sport
        captain {
          id
          username
        }
        players {
          id
          username
        }
      }
    }
  }
`;

const GET_MY_CONNECTIONS = gql`
  query Me {
    Me {
      id
      username
      connection {
        id
        avatar
        username
      }
    }
  }
`;

const GET_ATHLETE = gql`
  query Athlete($id: ID!) {
    Athlete(id: $id) {
      avatar
      username
      upcomingEvents {
        id
        eventName
        eventDate
        sport
        curPlayersAmount
        maxPlayersAmount
      }
      favoriteSport
      connection {
        avatar
        username
      }
    }
  }
`;

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
      }
    }
  }
`;

const GET_EVENTS = gql`
  query Events($cursor: String) {
    Events(cursor: $cursor) {
      cursor
      hasNextPage
      events {
        id
        eventDate
        eventName
        captain {
          id
          username
        }
        players {
          id
          username
        }
        private
        maxPlayersAmount
        curPlayersAmount
        sport
      }
    }
  }
`;

const GET_EVENT = gql`
  query Event($id: ID!) {
    Event(id: $id) {
      id
      eventName
      eventDate
      sport
      captain {
        id
        username
      }
      players {
        id
        username
      }
      curPlayersAmount
      maxPlayersAmount
    }
  }
`;

const GET_EVENT_BY_SPORT = gql`
  query EventBySport($sport: favoriteSportSelection!) {
    EventBySport(sport: $sport) {
      cursor
      hasNextPage
      events {
        id
        eventName
        eventDate
        sport
        captain {
          id
          username
        }
        players {
          id
          username
        }
        curPlayersAmount
        maxPlayersAmount
      }
    }
  }
`;

export {
  IS_LOGGED_IN,
  GET_ME,
  GET_MY_EVENTS,
  GET_MY_CONNECTIONS,
  GET_ATHLETE,
  GET_ATHLETES,
  GET_EVENTS,
  GET_EVENT,
  GET_EVENT_BY_SPORT
};

import { gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const SIGN_UP = gql`
  mutation signUp(
    $email: String!
    $username: String!
    $password: String!
    $favoriteSport: [favoriteSportSelection!]!
  ) {
    signUp(
      email: $email
      username: $username
      password: $password
      favoriteSport: $favoriteSport
    )
  }
`;

const SIGN_IN = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const NEW_EVENT = gql`
mutation newEvent(
  $sport: favoriteSportSelection!
  $maxPlayersAmount: Int!
  $eventDate: Date!
) {
  newEvent(
    sport: $sport
    eventDate: $eventDate
    maxPlayersAmount: $maxPlayersAmount
  ) {
    alert
    succeed
    event {
      id
      eventDate
      eventName
      maxPlayersAmount
      sport
      captain {
        username
      }
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
        private
        maxPlayersAmount
        curPlayersAmount
        sport
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
        connection {
          username
        }
      }
    }
  }
`;

export { IS_LOGGED_IN, SIGN_UP, SIGN_IN, NEW_EVENT, GET_EVENTS, GET_ATHLETES };
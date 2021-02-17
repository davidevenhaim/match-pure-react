import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, 
         ApolloProvider,
         InMemoryCache,
         createHttpLink,
       } from '@apollo/client';
import { setContext } from 'apollo-link-context';

// import of global styling
import GlobalStyle from '/components/GlobalStyle';

// import our routes
import Pages from '/pages';

// our api link
const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();


const authLink = setContext(( _, { headers }) => {
  return {
    headers: {
      ...headers, 
      authorization: localStorage.getItem('token') || ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

const data = {
  isLoggedIn: !!localStorage.getItem('token')
};

// write the cache data on initial state.
cache.writeData({ data });

// write the data after cache is reset
client.onResetStore(() =>
  cache.writeData({ data })
)


const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

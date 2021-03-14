import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache()
});

export default client;
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getAuthToken } from './storage';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const httpLink = createHttpLink({
  uri: API_ENDPOINT,
});

const authLink = setContext((_, {headers}) => {
  const token = getAuthToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
import ApolloClient from 'apollo-boost';

const {
  API_URL = 'http://localhost:4466'
} = process.env;

export const client = new ApolloClient({
  uri: API_URL,
});

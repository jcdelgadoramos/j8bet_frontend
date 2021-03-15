import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
    mutation($username: String!, $password: String!) {
      tokenAuth(username: $username, password: $password) {
        success,
        errors,
        unarchiving,
        token,
        unarchiving,
        user {
          id,
          username,
        }
      }
    }
`;

export default LOGIN_MUTATION;
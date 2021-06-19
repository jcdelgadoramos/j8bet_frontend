import { gql } from '@apollo/client';

const ME_QUERY = gql`
    query {
      me {
        username,
        firstName,
        lastName,
        isActive,
        verified,
        secondaryEmail,
        groups{
          edges{
            node{
              name
            }
          }
        }
      }
    }
`;

export default ME_QUERY;

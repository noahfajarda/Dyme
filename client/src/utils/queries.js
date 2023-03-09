import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    # match testing queries in apollo
    profiles {
      _id
      name
      skills
    }
  }
`;

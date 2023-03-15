import { gql } from '@apollo/client';

const ADD_PROFILE = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
      _id
      name
      skills
    }
  }
`;

const REMOVE_PROFILE = gql`
  mutation removeProfile($profileId: ID!) {
    removeProfile(profileId: $profileId) {
      _id
      name
    }
  }
`;


const ADD_USER = gql`
  mutation AddUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $budget: Float!, $availableBalance: Float!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, budget: $budget, availableBalance: $availableBalance, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
        budget
        availableBalance
      }
    }
  }
`;

export { ADD_PROFILE, REMOVE_PROFILE, ADD_USER }
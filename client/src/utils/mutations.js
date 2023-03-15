import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $budget: Float!) {
  addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, budget: $budget) {
    token
    user {
      email
    }
    }
  }
`;

const LOG_IN = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
        password
        budget
      }
    }
  }
`;

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




export { ADD_PROFILE, REMOVE_PROFILE, ADD_USER, LOG_IN }
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

const CREATE_EXPENSE = gql`
  mutation CreateExpense($name: String!, $amount: Float!, $category: String!, $description: String!, $associatedUser: String!) {
    addExpense(name: $name, amount: $amount, category: $category, description: $description, associatedUser: $associatedUser) {
      _id
      name
      associatedUser
      amount
      category
      description
    }
  }
`

const ADD_EXPENSE_TO_USER = gql`
  mutation AddExpenseToUser($userId: ID!, $expenseId: ID!) {
    addExpenseToUser(user_id: $userId, expense_id: $expenseId) {
      _id
      firstName
      lastName
      username
      email
      password
      budget
      expenses {
        _id
      }
    }
  }
`




export { ADD_PROFILE, REMOVE_PROFILE, ADD_USER, LOG_IN, CREATE_EXPENSE, ADD_EXPENSE_TO_USER }
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        # 'id' used for UUID
        firstName: String!
        lastName: String!
        username: String!
        password: String!
        email: String!
        budget: Float!
        availableBalance: Float!
        # categories: [Category]!
    }

    type Query {
        users: [User]
        user(_id: ID!): User
    }

    type Mutation {
        # ---- USER
        # CREATE
        addUser(firstName: String!, lastName: String!, username: String!, password: String!, email: String!, budget: Float!, availableBalance: Float!): User
        # UPDATE
        updateUser(_id: ID!, firstName: String!, lastName: String!, username: String!, password: String!, email: String!, budget: Float!, availableBalance: Float!): User
        # DELETE
        deleteUser(_id: ID!): User
    }
`;

module.exports = typeDefs;

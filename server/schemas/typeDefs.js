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

    type Category {
        _id: ID
        name: String!
        amountAllocated: Float!
        description: String!
        # subCategories: [Category]!
    }

    type Query {
        # ---- USER
        users: [User]
        user(_id: ID!): User

        # ---- CATEGORY
        categories: [Category]
        category(_id: ID!): Category
    }

    type Mutation {
        # ---- USER
        # CREATE
        addUser(firstName: String!, lastName: String!, username: String!, password: String!, email: String!, budget: Float!, availableBalance: Float!): User
        # UPDATE
        updateUser(_id: ID!, firstName: String!, lastName: String!, username: String!, password: String!, email: String!, budget: Float!, availableBalance: Float!): User
        # DELETE
        deleteUser(_id: ID!): User

        # ---- CATEGORY
        # CREATE
        addCategory(_id: ID, name: String!, amountAllocated: Float!, description: String!): Category
        # UPDATE
        updateCategory(_id: ID, name: String!, amountAllocated: Float!, description: String!): Category
        # DELETE
        deleteCategory(_id: ID!): Category
    }
`;

module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        # 'id' used for UUID
        firstName: String!
        lastName: String!
        username: String!
        email: String!
        budget: Float!
        password: String
        availableBalance: Float!
        categories: [Category]
    }

    # set up another type that attatches the JWT to the returned user
    type Auth {
        token: ID!
        user: User
    }

    type Category {
        _id: ID
        name: String!
        amountAllocated: Float!
        description: String!
        # subCategories: [Category]
    }

    type Query {
        me: Auth
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
        addUser(firstName: String!, lastName: String!, username: String!, password: String!, email: String!, budget: Float!, availableBalance: Float!): Auth
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

        # ---- CATEGORY X USER ASSOCIATIONS
        # ADD
        addCategoryToUser(user_id: ID!, category_id: ID!): User
        # REMOVE
        removeCategoryFromUser(user_id: ID!, category_id: ID!): User

        # ---- LOGIN
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        # 'id' used for UUID
        firstName: String!
        lastName: String!
        username: String!
        email: String!
        password: String!
        budget: Float!
        expenses: [Expense]
    }

    # set up another type that attatches the JWT to the returned user
    type Auth {
        token: ID!
        user: User
    }

    type Expense {
        _id: ID
        name: String!
        amount: Float!
        category: String!,
        description: String!,
        associatedUser: String!
    }

    type Query {
        # me: Auth
        me: User


        # ---- USER
        users: [User]
        user(_id: ID!): User

        # ---- CATEGORY
        expenses: [Expense]
        expense(_id: ID!): Expense
    }

    type Mutation {
        # ---- USER
        # CREATE
        addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, budget: Float!): Auth
        # UPDATE
        updateUser(_id: ID!, firstName: String!, lastName: String!, username: String!, email: String!, newPassword: String!, budget: Float!): User
        # DELETE
        deleteUser(_id: ID!): User

        # ---- EXPENSE
        # CREATE
        addExpense(name: String!, amount: Float!, category: String!, description: String!, associatedUser: String!): Expense
        # UPDATE
        updateExpense(_id: ID, name: String!, amount: Float!, category: String!, description: String!, associatedUser: String!): Expense
        # DELETE
        deleteExpense(_id: ID!): Expense

        # ---- EXPENSE X USER ASSOCIATIONS
        # ADD
        addExpenseToUser(user_id: ID!, expense_id: ID!): User
        # REMOVE
        removeExpenseFromUser(user_id: ID!, expense_id: ID!): User

        # ---- LOGIN
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;

const { AuthenticationError } = require('apollo-server-express');
const { User, Expense } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');



const resolvers = {
    Query: {
        // ---- USER
        // FIND ALL
        users: async () => {
            try {
                return await User.find({}).populate("expenses")
            } catch (err) {
                console.log("\n\n\nThere was a server-side error: \n\n\n", err)
            }
        },
        // FIND ONE BY ID
        user: async (parent, { _id }) => {
            try {
                // timestamps are in the console logs
                console.log(await User.findById(_id).populate("expenses"))
                return await User.findById(_id).populate("expenses");
            } catch (err) {
                console.log("\n\n\nThere was a server-side error: \n\n\n", err)
            }
        },
        // ME
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate("expenses")
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // ---- EXPENSES
        // FIND ALL
        expenses: async () => {
            try {
                return await Expense.find({})
            } catch (err) {
                console.log("\n\n\nThere was a server-side error: \n\n\n", err)
            }
        },
        // FIND ONE BY ID
        expense: async (parent, { _id }) => {
            try {
                // timestamps are in the console logs
                console.log(await Expense.findById(_id))
                return await Expense.findById(_id);
            } catch (err) {
                console.log("\n\n\nThere was a server-side error: \n\n\n", err)
            }
        },
    },

    Mutation: {
        // ---- USER
        // CREATE
        addUser: async (parent, { firstName, lastName, username, password, email, budget, availableBalance }) => {
            const user = await User.create({ firstName, lastName, username, password, email, budget, availableBalance })
            const token = signToken(user)
            return { user, token }
        },
        // UPDATE
        updateUser: async (parent, { _id, firstName, lastName, username, newPassword, email, budget, availableBalance }) => {
            // rehash the updated password
            newPasswordHashed = await bcrypt.hash(newPassword, 10);
            return User.findByIdAndUpdate(_id, { firstName, lastName, username, password: newPasswordHashed, email, budget, availableBalance }, { new: true });
        },
        // DELETE
        deleteUser: async (parent, { _id }) => {
            return User.findOneAndDelete({ _id });
        },

        // ---- CATEGORY
        // CREATE
        addExpense: async (parent, { name, amount, category, description, associatedUser }) => {
            return await Expense.create({ name, amount, category, description, associatedUser })
        },
        // UPDATE
        updateExpense: async (parent, { _id, name, amount, category, description, associatedUser }) => {
            return Expense.findByIdAndUpdate(_id, { name, amount, category, description, associatedUser }, { new: true });
        },
        // DELETE
        deleteExpense: async (parent, { _id }) => {
            return Expense.findOneAndDelete({ _id });
        },

        // ---- EXPENSE X USER ASSOCIATIONS
        // ADD
        addExpenseToUser: async (parent, { user_id, expense_id }) => {
            console.log()

            return User.findOneAndUpdate(
                { _id: user_id },
                {
                    $addToSet: { expenses: expense_id }
                },
                {
                    // return the NEWLY UPDATED data
                    new: true
                }
            )
        },
        // REMOVE
        removeExpenseFromUser: async (parent, { user_id, expense_id }) => {
            return User.findOneAndUpdate(
                { _id: user_id },
                {
                    $pull: { expenses: expense_id }
                },
                {
                    new: true
                }
            )
        },
        // LOGIN
        login: async (parent, { email, password }) => {
            // attempt to find a user with the given email
            const user = await User.findOne({ email });

            // give an error if no user found
            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            // check given pass against DB pass
            // GIVES BOOLEAN
            const correctPw = await user.isCorrectPassword(password);

            // throw error if 'false'
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            // create a token for the logged in user
            const token = signToken(user);

            return { user, token };
        }
    },
};

module.exports = resolvers;

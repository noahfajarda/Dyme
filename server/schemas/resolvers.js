const { User, Category } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        // ---- USER
        // FIND ALL
        users: async () => {
            try {
                // console.log(await User.find({}))
                return await User.find({}).populate("categories")
            } catch (err) {
                console.log("\n\n\nThere was a server-side error: \n\n\n", err)
            }
        },
        // FIND ONE BY ID
        // user: async (parent, { _id }) => {
        //     try {
        //         // timestamps are in the console logs
        //         console.log(await User.findById(_id))
        //         return await User.findById(_id);
        //     } catch (err) {
        //         console.log("\n\n\nThere was a server-side error: \n\n\n", err)
        //     }
        // },
    me: async(parent, { _id }, context) => {
        console.log (context.user)
        if (context.user) {
            const user = await user.findById(context.user._id)
            return user
        }
    },

        // ---- CATEGORY
        // FIND ALL
        categories: async () => {
            try {
                // console.log(await Category.find({}))
                return await Category.find({})
            } catch (err) {
                console.log("\n\n\nThere was a server-side error: \n\n\n", err)
            }
        },
        // FIND ONE BY ID
        category: async (parent, { _id }) => {
            try {
                // timestamps are in the console logs
                console.log(await Category.findById(_id))
                return await Category.findById(_id);
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
        updateUser: async (parent, { _id, firstName, lastName, username, password, email, budget, availableBalance }) => {
            return User.findByIdAndUpdate(_id, { firstName, lastName, username, password, email, budget, availableBalance }, { new: true });
        },
        // DELETE
        deleteUser: async (parent, { _id }) => {
            return User.findOneAndDelete({ _id });
        },

        // ---- CATEGORY
        // CREATE
        addCategory: async (parent, { name, amountAllocated, description }) => {
            return await Category.create({ name, amountAllocated, description })
        },
        // UPDATE
        updateCategory: async (parent, { _id, name, amountAllocated, description }) => {
            return Category.findByIdAndUpdate(_id, { name, amountAllocated, description }, { new: true });
        },
        // DELETE
        deleteCategory: async (parent, { _id }) => {
            return Category.findOneAndDelete({ _id });
        },

        // ---- CATEGORY X USER ASSOCIATIONS
        // ADD
        addCategoryToUser: async (parent, { user_id, category_id }) => {
            return User.findOneAndUpdate(
                { _id: user_id },
                {
                    $addToSet: { categories: category_id }
                },
                {
                    // return the NEWLY UPDATED data
                    new: true
                }
            )
        },
        // REMOVE
        removeCategoryFromUser: async (parent, { user_id, category_id }) => {
            return User.findOneAndUpdate(
                { _id: user_id },
                {
                    $pull: { categories: category_id }
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


            // return user;
        }
    },
};

module.exports = resolvers;

const { User, Category } = require('../models');

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
        user: async (parent, { _id }) => {
            try {
                // timestamps are in the console logs
                console.log(await User.findById(_id))
                return await User.findById(_id);
            } catch (err) {
                console.log("\n\n\nThere was a server-side error: \n\n\n", err)
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
            return await User.create({ firstName, lastName, username, password, email, budget, availableBalance })
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
        }
    },
};

module.exports = resolvers;

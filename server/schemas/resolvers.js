const { User, Category } = require('../models');

const resolvers = {
    Query: {
        // ---- USER
        // FIND ALL
        users: async () => {
            try {
                return await User.find({})
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
    },
};

module.exports = resolvers;

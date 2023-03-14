const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        // authentication fields: first & last name, username, email, password
        firstName: {
            type: String,
            required: true,
            // unique: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            // unique: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            // Must have upper, lower, & numbers
            match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/
        },
        // user specified fields: budget, availableBalance
        budget: {
            type: Number,
            required: true,
            trim: true,
        },
        availableBalance: {
            type: Number,
            required: true,
            trim: true,
        },
        categories: [
            {
                type: Schema.Types.ObjectId,
                // foreign key: categories
                // User HAS MANY Categories
                ref: 'Category'
            }
        ],
    },
    {
        // timestamps
        timestamps: true
    }
);

const User = model('User', userSchema);

module.exports = User;

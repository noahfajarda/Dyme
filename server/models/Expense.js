const { Schema, model } = require('mongoose');

const expenseSchema = new Schema(
    {
        // credentials
        name: {
            type: String,
            required: true,
            trim: true
        },
        amount: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        associatedUser: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        // timestamps
        timestamps: true
    }
);

const Expense = model('Expense', expenseSchema);

module.exports = Expense;
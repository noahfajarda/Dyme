const { Schema, model } = require('mongoose');

const budgetSchema = new Schema({
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    totalBudget: {
        type: Number,
        required: true
    },
    totalSpent: {
        type: Number,
        required: true
    },
    remainingBudget: {
        type: Number,
        required: true
    }
});

const Budget = model('Budget', budgetSchema);

module.exports = Budget;

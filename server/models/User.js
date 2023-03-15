const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema(
    {
        // authentication fields: first & last name, username, email, password
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
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
            // checking if it's an actual email address
            match: [/.+@.+\..+/, 'Must match an email address!'],
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            // Must have upper, lower, number, 8-25 char
            match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/,
            minLength: 8,
        },
        // budget
        budget: {
            type: Number,
            required: true,
            trim: true,
        },
        expenses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Expense'
            }
        ],
    },
    {
        // timestamps
        timestamps: true
    }
);

// THIS SOLELY ENCRYPTS THE PASSWORD
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        // jumble the encrypted password 10 times
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
})

// THIS CHECKS IF THE HASH OF THE PASSWORD ENTERED
// MATCHES THE HASH IN THE DB
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
}


const User = model('User', userSchema);

module.exports = User;

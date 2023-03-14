const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        amountAllocated: {
            type: Number,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            // required: true,
            trim: true
        },
        subCategories: [
            {
                type: Schema.Types.ObjectId,
                // foreign key: categories
                // Category HAS MANY Categories
                ref: 'Category'
            }
        ],
    },
    {
        // timestamps
        timestamps: true
    }
);

const Category = model('Category', categorySchema);

module.exports = Category;

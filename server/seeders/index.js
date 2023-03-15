const db = require('../config/connection');
// insert user & Catogory models
const { User, Expense } = require('../models');
// insert user & Catogory seeds
const userSeeds = require('./userSeeds.json');
const expenseSeeds = require('./expenseSeeds.json');

db.once('open', async () => {
  try {
    // delete existing users & expenses
    await User.deleteMany({});
    await Expense.deleteMany({});
    // create existing users & categories
    await User.create(userSeeds);
    // await Expense.create(expenseSeeds);


    for (let i = 0; i < expenseSeeds.length; i++) {
      const { _id, associatedUser } = await Expense.create(expenseSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: associatedUser },
        {
          $addToSet: {
            expenses: _id,
          },
        }
      );
    }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

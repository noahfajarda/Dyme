const db = require('../config/connection');
// insert user & Catogory models
const { Profile } = require('../models');
// insert user & Catogory seeds
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  try {
    // delete existing users & cateogries
    await Profile.deleteMany({});
    // create existing users & categories
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

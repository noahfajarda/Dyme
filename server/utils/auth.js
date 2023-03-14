// import "json web token" library
const jwt = require('jsonwebtoken');

// declare 'secret' and 'expiration' variables
const secret = 'mysecretssshhhhhhh';
// set token expiration time
const expiration = '1h';

module.exports = {
  // 'signToken' function takes in an 'email', 'name', and 'id'
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    // use 'jwt.sign' and pass in the variables, secret, and expiration time
    // this will generate a token for the user login session that will expire after 2 hours
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

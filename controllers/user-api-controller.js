import mongoose from 'mongoose';
import passport from 'passport';
import { BasicStrategy } from 'passport-http';

const userModel = mongoose.model('user');

// Login Handler
const logInUser = (req, res) => {
  res.status(200).send('Successful API Login Request');
};

const registerNewUser = async (req, res) => {
    // res.status(200).send('Successful API New User POST Request');
    try {

      let exists = await alreadyExists(req.body.email, req.body.username);
      console.log(exists);
      if(exists) {
        res
            .status(403)
            .send('Forbidden. Username or email already exists.');
      }
      else {
        let user = await userModel.create(req.body);
        res.status(201).json(user);
      }
    } catch (err) {
        res
          .status(400)
          .send('Bad Request. The User in the body of the Request is either missing or malformed.');
    }
  }

  const alreadyExists = async ( email, username ) => (
    await userModel.exists({
      '$or': [
        { email: email },
        { username: username }
  ] })
  );

  passport.use(new BasicStrategy(
    (username, password, done) => {
      userModel
      .findOne({
        '$or': [
          { email: username },
          { username: username }
        ]
      })
      .exec( async (error, user) => {
        if (error) return done(error);
        // user wasn't found
        if (!user) return done(null, false);
        // user was found, see if it's a valid password
        if (!await user.verifyPassword(password)) { return done(null,
  false); }
        return done(null, user);
      });
  } ));

  export { registerNewUser, logInUser };
import mongoose from 'mongoose';

const userModel = mongoose.model('user');

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

  export { registerNewUser };
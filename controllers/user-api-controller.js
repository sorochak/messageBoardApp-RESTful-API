import mongoose from 'mongoose';

const userModel = mongoose.model('user');

const registerNewUser = (req, res) => {
    res.status(200).send('Successful API New User POST Request');
  }

  export { registerNewUser };
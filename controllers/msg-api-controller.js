//import messageSchema from '../models/message-schema.js';
import mongoose from 'mongoose';

const messageModel = mongoose.model('message');

// GET Request Handler
const getAllMessages = async (req, res) => {
    try{
        let messages = await messageModel.find( {}, '', { sort: { _id: -1 } } ).exec();
        res.status(200).json(messages);
    } catch(err) {
        res.status(400).send('Bad Request');
    }
  };

  // POST Request Handler
  const addNewMessage = async (req, res) => {

    try {
        let message = await messageSchema.validate(req.body);
        // TODO: add message as first element of array and
        message.id = messages.length;
        messages.unshift(message);
        res.status(201).json(message);
        console.log(messages);

        // respond with '201 Created' Status Code and
        //the message, as JSON, in the body of the response.
      } catch (err) {
          res
            .status(400)
            .send('Bad Request. The message in the body of the \
            Request is either missing or malformed.');
      }

    //res.status(200).send('Successful API POST Request');
  };

//   const messages = [
//     {
//         id: 0,
//         name: "Bill",
//         msgText: "I don't know. Philosophize with him!",
//     },
//     {
//         id: 1,
//         name: "Ted",
//         msgText: "All we are is dust in the wind, dude.",
//     },
//     {
//         id: 2,
//         name: "Soldier",
//         msgText: "Are you suggesting coconuts migrate?",
//     },
//     {
//         id: 3,
//         name: "The Black Knight",
//         msgText: "Just a flesh wound.",
//     },
//     {
//         id: 4,
//         name: "God",
//         msgText: "Course it's a good idea!",
//     },
//     {
//         id: 5,
//         name: "Hunter S. Thompson",
//         msgText: "Too weird to live, too rare to die!",
//     },
// ];

  export { getAllMessages, addNewMessage };
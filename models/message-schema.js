// import yup from 'yup';
import mongoose from 'mongoose';

// Data Schema for a New Message
// Matches the one from the front-end App!

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 15,
    match: /^[A-Za-z]+$/
  }, 
  msgText: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 30
  } 
});

messageSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => { delete ret._id; }
});


// const messageSchema = yup.object().shape({
//   name: yup
//     .string()
//     .trim()
//     .min(2, 'Your name must be at least ${min} characters.')
//     .max(15, 'Your name cannot be more than ${max} characters.')
//     .matches(/[A-Za-z]/, 'Invalid name. Use Upper and Lowercase lettersonly.')
//     .required('Your name is required.'),
//   msgText: yup
//     .string()
//     .trim()
//     .min(2, 'Your message must be at least ${min} characters.')
//     .max(30, 'Your message must be no more than ${max} characters')
//     .required('A message is required.')
// });

// export default messageSchema;
export default mongoose.model('message', messageSchema);
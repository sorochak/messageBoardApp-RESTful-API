import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }, 
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 15,
      match: /^[A-Za-z0-9_-]+$/
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 64
    }  
  });

  userSchema.set('toJSON', {
    versionKey: false,
    virtuals: true,
    transform: (doc, ret) => { delete ret._id; }
  });


  // export default userSchema;
export default mongoose.model('user', userSchema);
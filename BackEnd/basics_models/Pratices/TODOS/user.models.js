import mongoose from 'mongoose';

const userScheme = new mongoose.Schema(
  // schema defination
  {
    // can used this way
    // ...
    // username : String,
    // email : String,
    // isActive : Boolean

    // this is best way

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password Is Required!'],
    },
  },

  //timestamp
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userScheme);

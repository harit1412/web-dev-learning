import mongoose from 'mongoose';

const sub_todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Sub_Todo = mongoose.model('SubTodo', sub_todoSchema);

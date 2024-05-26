import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    requried: true,
  },
});

const orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  orderItems: {
    type: [orderItemSchema],
  },
  adress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
    default: 'PENDING',
  },
});

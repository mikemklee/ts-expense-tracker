import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add a description'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TransactionModel = mongoose.model('Transaction', TransactionSchema);

export default TransactionModel;

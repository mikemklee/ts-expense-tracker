import { RequestHandler } from 'express';

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
export const getTransactions: RequestHandler = (req, res, next) => {
  res.send('GET transactions');
};

// @desc    Add new transaction
// @route   POST /api/v1/transactions
// @access  Public
export const addTransaction: RequestHandler = (req, res, next) => {
  res.send('POST transactions');
};

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
export const deleteTransaction: RequestHandler = (req, res, next) => {
  res.send('DELETE transactions');
};

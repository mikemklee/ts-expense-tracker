import { RequestHandler } from 'express';
import mongoose from 'mongoose';

import Transaction from '../models/Transaction';

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
export const getTransactions: RequestHandler = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc    Add new transaction
// @route   POST /api/v1/transactions
// @access  Public
export const addTransaction: RequestHandler = async (req, res, next) => {
  try {
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err === mongoose.Error.ValidationError) {
      const messages = Object.values<mongoose.Error.ValidatorError>(
        err.errors
      ).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server error',
      });
    }
  }
};

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
export const deleteTransaction: RequestHandler = async (req, res, next) => {
  try {
    res.send('DELETE transactions');
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

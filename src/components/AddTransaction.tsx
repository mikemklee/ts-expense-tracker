import React, { useState, useContext } from 'react';

import { TransactionItem, GlobalContext } from '../context/GlobalState';
import { addTransaction } from '../context/AppReducer';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { dispatch } = useContext(GlobalContext);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction: TransactionItem = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    dispatch(addTransaction(newTransaction));

    // clear forms
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;

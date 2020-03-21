import React, { useState, FormEvent } from 'react';

import { TempTransactionItem } from '../context/GlobalState';
import { useAddTransaction } from '../hooks/useAddTransaction';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const [addItem] = useAddTransaction();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTransaction: TempTransactionItem = {
      text,
      amount: +amount,
    };
    addItem(newTransaction);

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

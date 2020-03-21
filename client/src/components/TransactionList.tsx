import React, { useContext } from 'react';

import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';
import { useGetTransactions } from '../hooks/useGetTransactions';

const TransactionList = () => {
  const { state } = useContext(GlobalContext);
  const { transactions } = state;

  useGetTransactions();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length === 0 && 'No previous transactions to show.'}
        {transactions.map(item => (
          <Transaction key={item._id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;

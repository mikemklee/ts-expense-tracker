import React, { useContext } from 'react';

import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { state } = useContext(GlobalContext);

  const { transactions } = state;

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(item => (
          <Transaction key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;

import React from 'react';

import { TransactionItem } from '../context/GlobalState';

type TransactionProps = {
  item: TransactionItem;
};

const Transaction = ({ item }: TransactionProps) => {
  return (
    <li className="minus">
      {item.text}{' '}
      <span>
        {Math.sign(item.amount)}${Math.abs(item.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;

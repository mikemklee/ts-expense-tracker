import React, { useContext } from 'react';

import { TransactionItem, GlobalContext } from '../context/GlobalState';
import { deleteTransaction } from '../context/AppReducer';

type TransactionProps = {
  item: TransactionItem;
};

const Transaction = ({ item }: TransactionProps) => {
  const { dispatch } = useContext(GlobalContext);

  const sign = item.amount > 0 ? '+' : '-';

  return (
    <li className="minus">
      {item.text}{' '}
      <span>
        {sign}${Math.abs(item.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTransaction(item.id))}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;

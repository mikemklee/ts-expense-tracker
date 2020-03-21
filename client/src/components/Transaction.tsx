import React from 'react';

import { TransactionItem } from '../context/GlobalState';
import { useDeleteTransaction } from '../hooks/useDeleteTransaction';

type TransactionProps = {
  item: TransactionItem;
};

const Transaction = ({ item }: TransactionProps) => {
  const [deleteItem] = useDeleteTransaction();

  const sign = item.amount > 0 ? '+' : '-';

  return (
    <li className={item.amount > 0 ? 'plus' : 'minus'}>
      {item.text}{' '}
      <span>
        {sign}${Math.abs(item.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteItem(item._id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;

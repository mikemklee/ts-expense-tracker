import axios from 'axios';
import { useContext, useEffect, Dispatch, useState } from 'react';

import {
  ActionTypes,
  addTransaction,
  transactionError,
} from '../context/AppReducer';
import { GlobalContext, TempTransactionItem } from '../context/GlobalState';

export const useAddTransaction = () => {
  const { dispatch } = useContext(GlobalContext);
  const [item, setItem] = useState<TempTransactionItem | null>(null);

  useEffect(() => {
    const fetchData = async (dispatch: Dispatch<ActionTypes>) => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const res = await axios.post('/api/v1/transactions/', item, config);
        dispatch(addTransaction(res.data.data));
      } catch (err) {
        dispatch(transactionError(err.response.data.error));
      }
    };
    if (item) {
      fetchData(dispatch);
    }
  }, [item, dispatch]);

  return [setItem] as const;
};

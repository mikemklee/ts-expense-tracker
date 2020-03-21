import axios from 'axios';
import { useContext, useState, useEffect, Dispatch } from 'react';

import {
  ActionTypes,
  deleteTransaction,
  transactionError,
} from '../context/AppReducer';
import { GlobalContext } from '../context/GlobalState';

export const useDeleteTransaction = () => {
  const { dispatch } = useContext(GlobalContext);
  const [item, setItem] = useState<string>('');

  useEffect(() => {
    const fetchData = async (dispatch: Dispatch<ActionTypes>) => {
      try {
        await axios.delete(`/api/v1/transactions/${item}`);
        dispatch(deleteTransaction(item));
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

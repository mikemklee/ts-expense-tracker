import axios from 'axios';
import { useContext, useEffect, Dispatch } from 'react';

import {
  ActionTypes,
  getTransactions,
  transactionError,
} from '../context/AppReducer';
import { GlobalContext } from '../context/GlobalState';

export const useGetTransactions = () => {
  const { dispatch } = useContext(GlobalContext);

  const fetchData = async (dispatch: Dispatch<ActionTypes>) => {
    try {
      const res = await axios.get('/api/v1/transactions');
      dispatch(getTransactions(res.data.data));
    } catch (err) {
      dispatch(transactionError(err.response.data.error));
    }
  };

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);
  return [];
};

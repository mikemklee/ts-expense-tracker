import { GlobalState, TransactionItem } from './GlobalState';

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const TRANSACTION_ERROR = 'TRANSACTION_ERROR';

export interface GetTransactionAction {
  type: typeof GET_TRANSACTIONS;
  payload: TransactionItem[];
}

export interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: TransactionItem;
}

export interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION;
  payload: number;
}

export interface TransactionErrorAction {
  type: typeof TRANSACTION_ERROR;
  payload: any;
}

export type ActionTypes =
  | GetTransactionAction
  | AddTransactionAction
  | DeleteTransactionAction
  | TransactionErrorAction;

// ACTION CREATORS
export const getTransactions = (
  transactions: TransactionItem[]
): GetTransactionAction => ({
  type: GET_TRANSACTIONS,
  payload: transactions,
});

export const addTransaction = (
  transaction: TransactionItem
): AddTransactionAction => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const deleteTransaction = (id: number): DeleteTransactionAction => ({
  type: DELETE_TRANSACTION,
  payload: id,
});

export const transactionError = (error: any): TransactionErrorAction => ({
  type: TRANSACTION_ERROR,
  payload: error,
});

// REDUCER
export default (state: GlobalState, action: ActionTypes): GlobalState => {
  switch (action.type) {
    case GET_TRANSACTIONS: {
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    }
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          item => item.id !== action.payload
        ),
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

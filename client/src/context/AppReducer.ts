import { GlobalState, TransactionItem } from './GlobalState';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: TransactionItem;
}

export interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION;
  payload: number;
}

export type ActionTypes = AddTransactionAction | DeleteTransactionAction;

// ACTION CREATORS
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

// REDUCER
export default (state: GlobalState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          item => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

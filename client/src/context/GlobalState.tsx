import React, { useReducer, ReactNode, Dispatch } from 'react';

import AppReducer, { ActionTypes } from './AppReducer';

export type TransactionItem = {
  id: number;
  text: string;
  amount: number;
};

export type Transactions = TransactionItem[];

export type GlobalState = {
  transactions: Transactions;
};

// Initial state
const initialState: GlobalState = {
  transactions: [],
};

interface ContextProps {
  state: GlobalState;
  dispatch: Dispatch<ActionTypes>;
}

// Create context
export const GlobalContext = React.createContext({} as ContextProps);

// Provider component

type ProviderProps = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const value = { state, dispatch };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

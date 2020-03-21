import React, { useReducer, ReactNode } from 'react';

import AppReducer from './AppReducer';

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
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
};

// Create context
export const GlobalContext = React.createContext(initialState);

// Provider component

type ProviderProps = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const MyProvider = GlobalContext.Provider;

  return (
    <MyProvider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </MyProvider>
  );
};

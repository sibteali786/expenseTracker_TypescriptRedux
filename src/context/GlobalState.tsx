import React, { createContext, useReducer } from "react";

type objectIs = {
  id: number;
  text: string;
  amount: number;
};
type Transactions = {
  transactions: Array<objectIs>;
};

type childProps = {
  children: React.ReactNode;
};

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ]
};

export const GlobalContext = createContext<Transactions>(initialState);

// provider Component
export const GlobalProvider = ({ children }: childProps) => {
  function AppReducer(state: Transactions, action: any) {
    switch (action.type) {
      case "DELETE_TRANSACTION":
        return {
          ...state,
          transactions:state.transactions.filter(transaction => transaction.id !== action.payload )
        }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions (called using dispatch)
  function deleteTransaction(id){
    dispatch({
      type:"DELETE_TRANSACTION",
      payload:id
    })
  }
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};

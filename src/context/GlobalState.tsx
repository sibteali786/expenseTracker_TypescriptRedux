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
  transactions: []
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
        case "ADD_TRANSACTION":
          return {
            ...state,
            transactions:[action.payload,...state.transactions]
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

  function addTransaction(transaction){
    dispatch({
      type:"ADD_TRANSACTION",
      payload:transaction
    })
  }
  
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction}}>
      {children}
    </GlobalContext.Provider>
  );
};

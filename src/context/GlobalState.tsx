import React, { createContext, useReducer } from "react";
type objectIs = {
  id: number;
  text: string;
  amount: number;
};
type Transactions = {
  transactions: Array<objectIs>;
};

const initialState: Transactions = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 1, text: "Salary", amount: 300 },
    { id: 1, text: "Book", amount: -10 },
    { id: 1, text: "Camera", amount: 150 }
  ]
};

export const GlobalContext = createContext(initialState);

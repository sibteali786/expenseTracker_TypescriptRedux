import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 1, text: "Salary", amount: 300 },
    { id: 1, text: "Book", amount: -10 },
    { id: 1, text: "Camera", amount: 150 }
  ]
};

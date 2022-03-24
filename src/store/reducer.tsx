import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./actiontype";

export interface objectIs {
  id: number;
  text: string;
  amount: number;
}
export type Transactions = {
  transactions: objectIs[];
};

const initialState = {
  transactions: []
};

export type Action = {
  type: string;
  payload: objectIs;
};

export type DispatchType = (args: Action) => Action;
export const reducer = (
  state: Transactions = initialState,
  action: Action
): Transactions => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

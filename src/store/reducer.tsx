import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./actiontype";

type objectIs = {
  id: number;
  text: string;
  amount: number;
};
type Transactions = {
  transactions: Array<objectIs>;
};

const initialState = {
  transactions: []
};

type Action = {
  type: string;
  payload: number | string;
};
export const reducer = (state: Transactions = initialState, action: Action) => {
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
          (transaction) => transaction.id !== action.payload
        )
      };
    default:
      return state;
  }
};

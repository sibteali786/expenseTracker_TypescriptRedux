import * as actionType from "../store/actiontype";
import { objectIs } from "../store/reducer";

export const addTransaction = (transaction: objectIs) => ({
  type: actionType.ADD_TRANSACTION,
  payload: transaction
});

export const deleteTransaction = (id: number) => ({
  type: actionType.DELETE_TRANSACTION,
  payload: id
});

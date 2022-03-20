import * as actionType from "../store/actiontype";

export const addTransaction = (transaction) => ({
  type: actionType.ADD_TRANSACTION,
  payload: transaction
});

export const deleteTransaction = (id) => ({
  type: actionType.DELETE_TRANSACTION,
  payload: id
});

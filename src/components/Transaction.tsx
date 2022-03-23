import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../store/Actions";

export type objectIs = {
  id: number;
  text: string;
  amount: number;
};

export type props = {
  transaction: objectIs;
};

export const Transaction = (props: props) => {
  const dispatch = useDispatch();
  const transaction = props.transaction;
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTransaction(transaction.id))}
      >
        x
      </button>
    </li>
  );
};

import React from "react";

type objectIs = {
  id: number;
  text: string;
  amount: number;
};

type props = {
  transaction: objectIs;
};

export const Transaction = (props: props) => {
  const transaction = props.transaction;
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

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

  return (
    <li className="minus">
      {transaction.text} <span>-$400</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

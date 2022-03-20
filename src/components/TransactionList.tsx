import React, { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Transaction } from "./Transaction";
const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  );
};

export default TransactionList;

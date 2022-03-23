import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Transaction } from "./Transaction";
import { objectIs } from "./Transaction";
import { RootState } from "../store/store";
const TransactionList = () => {
  const transactions = useSelector<RootState, Array<objectIs>>(
    (state) => state.transactions
  );

  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: objectIs) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  );
};

export default TransactionList;

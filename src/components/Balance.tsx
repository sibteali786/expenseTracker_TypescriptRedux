import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { objectIs } from "../store/reducer";
const Balance = () => {
  const transactions = useSelector<RootState, Array<objectIs>>(
    (state) => state.transactions
  );
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1 id="balance"> ${total}</h1>
    </Fragment>
  );
};

export default Balance;

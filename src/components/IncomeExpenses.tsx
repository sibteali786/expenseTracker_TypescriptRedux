import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { objectIs } from "./Transaction";
import { RootState } from "../store/store";
const IncomeExpenses = () => {
  const transactions = useSelector<RootState, Array<objectIs>>(
    (state) => state.transactions
  );
  const amounts = transactions.map(
    (transaction: objectIs) => transaction.amount
  );
  const income = amounts
    .filter((item: number) => item > 0)
    .reduce((acc: number, item: number) => (acc += item), 0)
    .toFixed(2);
  const expense = amounts
    .filter((item: number) => item < 0)
    .reduce((acc: number, item: number) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div style={{ margin: "1.2rem 1rem" }}>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div style={{ margin: "1.2rem 1rem" }}>
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;

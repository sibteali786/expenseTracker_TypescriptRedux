import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction, deleteTransaction } from "../store/Actions";
import { bindActionCreators } from "redux";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addTransaction, deleteTransaction },
    dispatch
  );
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };
    actions.addTransaction(newTransaction);
  };
  return (
    <Fragment>
      <h3>Add New Transaction</h3>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" className="label1">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative-expenses,positive-income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </Fragment>
  );
};

export default AddTransaction;

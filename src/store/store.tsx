import { createStore, Store } from "redux";
import { reducer, DispatchType, Action, Transactions } from "./reducer";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store: Store<Transactions, Action> & {
  dispatch: DispatchType;
} = createStore(reducer, enhancer);
export type RootState = ReturnType<typeof store.getState>;

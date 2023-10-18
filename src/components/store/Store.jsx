import { createStore } from "redux";
import ReducerCounter from "../reducer/CounterReducer";

const Store = createStore(ReducerCounter);

export default Store;

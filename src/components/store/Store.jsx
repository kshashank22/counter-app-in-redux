import { createStore } from "redux";
import ReducerCounter from "../reducer/ReducerCounter";

const Store = createStore(ReducerCounter);

export default Store;

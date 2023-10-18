import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../reducers/CounterReducer";

const Store = configureStore({ reducer: CounterReducer });

export default Store;

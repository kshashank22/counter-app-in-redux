import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../../redux/CounterReducer";

const Store = configureStore({ reducer: CounterReducer });

export default Store;

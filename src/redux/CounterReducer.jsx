import { counter } from "../actions/constants";

const CounterReducer = (state = counter, action) => {
  switch (action.type) {
    case "counterIncrease":
      return { count: state.count + 1 };
    case "counterDecrease":
      if (state.count < 1) {
        return state;
      }
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default CounterReducer;

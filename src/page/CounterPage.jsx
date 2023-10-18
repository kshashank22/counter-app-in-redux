import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncrementCounter, DecrementCounter } from "../redux/actions";
import "./CounterPage.css";
import ButtonCounter from "../components/counterButton/CounterButton";

function CounterPage() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="counterContainer">
      <h1>Counter</h1>
      <p>{count}</p>
      <div className="buttonContainer">
        <ButtonCounter
          value={"Increase"}
          className={"buttons"}
          onclick={() => dispatch(IncrementCounter())}
        />
        <ButtonCounter
          value={"Decrease"}
          className={"buttons"}
          onclick={() => dispatch(DecrementCounter())}
        />
      </div>
    </div>
  );
}

export default CounterPage;

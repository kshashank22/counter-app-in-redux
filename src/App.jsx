import React from "react";
import { Provider } from "react-redux";
import CounterPage from "./page/CounterPage";
import Store from "./redux/store/Store";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <CounterPage />
      </div>
    </Provider>
  );
}

export default App;

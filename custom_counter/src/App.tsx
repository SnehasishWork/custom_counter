import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./container/CounterConatiner";

function App() {
  return (
    <div>
      <CounterContainer
        maxValue={100}
        initialValue={5}
        onValueChange={(value) => {
          console.log(value);
        }}
      ></CounterContainer>
      <div>Current Max Value: 100</div>
      <div>Current Initial Value: 5</div>
    </div>
  );
}

export default App;

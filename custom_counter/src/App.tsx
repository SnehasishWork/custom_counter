import React, { useEffect, useState } from "react";
import "./App.css";
import CounterContainer from "./container/CounterConatiner";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [counterValue, setCounterValue] = useState<number>(1);
  const [serviceTimer, setServiceTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    axios
      .get(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json"
      )
      .then((response) => {
        setCounterValue(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const counterValueChanged = (value: number) => {
    setCounterValue(value);
    if (!!serviceTimer) {
      clearTimeout(serviceTimer);
    }
    setServiceTimer(
      setTimeout(() => {
        setLoading(true);
        axios
          .put(
            "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
            { counter1: value }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 1000)
    );
  };

  return (
    <div>
      {loading && (
        <div className="common-left-margin">Saving counter value</div>
      )}
      <CounterContainer
        maxValue={100}
        counterValue={counterValue}
        setCounterValue={counterValueChanged}
      ></CounterContainer>
      <div style={{ fontWeight: "bold" }} className="common-left-margin">
        Counter Value
      </div>
      <div className="common-left-margin">{counterValue}</div>
    </div>
  );
}

export default App;

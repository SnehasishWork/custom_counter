import React from "react";
import "./CounterComponent.css";

const CounterComponent = (props: CounterComponentProps) => {
  return (
    <div className="counter-container">
      <button
        className="decrement-button"
        onClick={(e) => {
          if (props.onValueChange) {
            props.onValueChange(props.counterValue - 1);
          }
          props.setCounterValue(props.counterValue - 1);
        }}
      >
        -
      </button>
      <input
        className="counter-input"
        type="number"
        max={props.maxValue}
        value={props.counterValue}
        onChange={(e) => {
          let value =
            +e.target.value <= props.maxValue
              ? +e.target.value
              : props.maxValue;
          if (props.onValueChange) {
            props.onValueChange(value);
          }
          props.setCounterValue(value);
        }}
      />
      <button
        className="increment-button"
        onClick={(e) => {
          if (props.counterValue < props.maxValue) {
            if (props.onValueChange) {
              props.onValueChange(props.counterValue + 1);
            }
            props.setCounterValue(props.counterValue + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default CounterComponent;

interface CounterComponentProps {
  maxValue: number;
  onValueChange?: (value: number) => void;
  counterValue: number;
  setCounterValue: (value: number) => void;
}

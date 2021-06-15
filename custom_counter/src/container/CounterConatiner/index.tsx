import React, { useState } from "react";
import CounterComponent from "../../component/CounterComponent";

const CounterContainer = ({
  initialValue = 1,
  maxValue = 1000,
  onValueChange
}: CounterContainerProps) => {
  const [counterValue, setCounterValue] = useState<number>(initialValue);

  const getCurrentValue = () => {
    return counterValue;
  };

  return (
    <CounterComponent
      counterValue={counterValue}
      maxValue={maxValue}
      onValueChange={onValueChange}
      setCounterValue={setCounterValue}
    ></CounterComponent>
  );
};

export default CounterContainer;

interface CounterContainerProps {
  initialValue?: number;
  maxValue?: number;
  onValueChange?: (value: number) => void;
}

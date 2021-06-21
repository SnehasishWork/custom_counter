import CounterComponent from "../../component/CounterComponent";

const CounterContainer = ({
  initialValue = 1,
  maxValue = 1000,
  counterValue,
  setCounterValue
}: CounterContainerProps) => {
  return (
    <CounterComponent
      counterValue={counterValue}
      maxValue={maxValue}
      setCounterValue={setCounterValue}
    ></CounterComponent>
  );
};

export default CounterContainer;

interface CounterContainerProps {
  initialValue?: number;
  maxValue?: number;
  counterValue: number;
  setCounterValue: (value: number) => void;
}

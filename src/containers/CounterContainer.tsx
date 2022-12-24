import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer() {
  const { number, diff } = useSelector((state: any) => state.counter);

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff: number) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;

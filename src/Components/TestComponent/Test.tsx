import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Redux/actions/counterActions'; // Adjust the path as needed
import { RootState } from "../../Redux/store"; // Import RootState type

const Test = () => {
  const counter = useSelector((state: RootState) => state.counter.counter); // Get counter from Redux store
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div className="test">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Test;

// redux toolkit
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { actions } from "./store/index";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const inCrement = () => {
    dispatch(actions.increment());
  };
  const deCrement = () => {
    dispatch(actions.decrement());
  };
  const AddByValue = () => {
    dispatch(actions.addby(10));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={inCrement}>Increment</button>
      <button onClick={deCrement}>Decrement</button>
      <button onClick={AddByValue}>Add 10</button>

    </div>
  );
}

export default App;


// redux
// import { useSelector, useDispatch } from "react-redux";
// import "./App.css";

// function App() {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const inCrement = () => {
//     dispatch({ type: "INC" });
//   };
//   const deCrement = () => {
//     dispatch({ type: "DEC" });
//   };
//   const AddByValue = () => {
//     dispatch({ type: "ADDBYVALUE" ,payload:10});
//   };
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h2>{counter}</h2>
//       <button onClick={inCrement}>Increment</button>
//       <button onClick={deCrement}>Decrement</button>
//       <button onClick={AddByValue}>Add 10</button>

//     </div>
//   );
// }

// export default App;

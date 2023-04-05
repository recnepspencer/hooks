import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./Components/ClassCounter";
import HookCounter from "./Components/HookCounter";
import HookCounterTwo from "./Components/HookCounterTwo";
import HookCounterThree from "./Components/HookCounterThree";
import HookCounterFour from "./Components/HookCounterFour";
import UseEffectCounterOne from "./Components/useEffectCounterOne";
import HookMouse from "./Components/HookMouse";
import MouseContainer from "./Components/MouseContainer";
import IntervalClassCounter from "./Components/IntervalClassCounter";
import IntervalHookCounter from "./Components/IntervalHookCounter";
import DataFetching from "./Components/DataFetching";
import ComponentC from "./Components/ComponentC";
import React, { useReducer } from "react";
import Counter1 from "./Components/Counter1";
import Counter2 from "./Components/Counter2";
import Counter3 from "./Components/Counter3";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";
import DataFetching1 from "./Components/DataFetching1";

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        <DataFetching1></DataFetching1>
        {/* Count: {count}
        <CompA></CompA>
        <CompB></CompB>
        <CompC></CompC> */}
        {/* <Counter3></Counter3> */}
        {/* <Counter2></Counter2> */}
        {/* <Counter1></Counter1> */}
        {/* <UserContext.Provider value={'Spencer'}>
        <ChannelContext.Provider value='SpenStar'>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
        {/* <DataFetching></DataFetching> */}
        {/* <IntervalHookCounter></IntervalHookCounter>
      <IntervalClassCounter></IntervalClassCounter> */}
        {/* <MouseContainer></MouseContainer> */}
        {/* <HookMouse></HookMouse> */}
        {/* <UseEffectCounterOne></UseEffectCounterOne> */}
        {/* <HookCounterFour></HookCounterFour> */}
        {/* <HookCounterTwo></HookCounterTwo>
      <HookCounterThree></HookCounterThree> */}
        {/* <HookCounter></HookCounter> */}
        {/* <ClassCounter></ClassCounter> */}
 
    {/* </CountContext.Provider> */}
    </div>
  );
}

export default App;

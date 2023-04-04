import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import UseEffectCounterOne from './Components/useEffectCounterOne';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';
import React from 'react';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <Counter2></Counter2>
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
    </div>
  );
}

export default App;

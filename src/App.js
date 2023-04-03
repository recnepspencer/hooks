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

function App() {
  return (
    <div className="App">
      <MouseContainer></MouseContainer>
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

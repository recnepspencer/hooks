import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import UseEffectCounterOne from './Components/useEffectCounterOne';

function App() {
  return (
    <div className="App">
      <UseEffectCounterOne></UseEffectCounterOne>
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookCounterTwo></HookCounterTwo>
      <HookCounterThree></HookCounterThree> */}
      {/* <HookCounter></HookCounter> */}
      {/* <ClassCounter></ClassCounter> */}
    </div>
  );
}

export default App;

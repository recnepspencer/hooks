import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounterTwo></HookCounterTwo>
      {/* <HookCounter></HookCounter> */}
      {/* <ClassCounter></ClassCounter> */}
    </div>
  );
}

export default App;

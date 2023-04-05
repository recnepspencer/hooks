import React, {useState} from 'react'
import useCounter from '../Hooks/useCounter'

function CustomCounterOne() {
    const [count, increment, decrement, reset] = useCounter(5, 52)
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomCounterOne

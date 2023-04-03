import React, {useState} from 'react'

function HookCounterTwo() {
    const initializationCount = 0
    const [count, setCount] = useState(initializationCount)

    const incrementFive = () => {
        for(let i = 0; i  < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initializationCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}> Deccrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo

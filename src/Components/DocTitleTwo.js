import React, {useEffect, useState} from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle'

function DocTitleTwo() {
    const [count, setCount] = useState(0) 
    useDocumentTitle(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )

  return (
    <div>

    </div>
  )
}

export default DocTitleTwo

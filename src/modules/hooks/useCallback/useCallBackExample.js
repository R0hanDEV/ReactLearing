import React, { useState } from 'react'
import { useCallback } from 'react'

function UseCallBackExample() {
    const [count, setCount] = useState(0)

    const incrementHandle = useCallback(() => {
        setCount(count + 1)
    }, [count])
    return (
        <>
            <div>
                <h6>What is UseCallBack</h6>
                <p>useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.</p>
            </div>
            {count}
            <Children incrementHandle={incrementHandle}></Children>
        </>
    )
}

function Children({ ...props }) {
    console.log(props)
    return (
        <button
            onClick={props.incrementHandle}
        >Increment</button>
    )
}
export default UseCallBackExample
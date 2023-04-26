import React, { useState } from 'react'
import { useMemo } from 'react'

function UseMemoexample() {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)

    const result = useMemo(() => {
        return input1 * input2
    }, [input1, input2])
    return (
        <>
            <h6>What is useMemo</h6>
            <p> UseMemo memoize the result of a function call and recompute it only when its dependencies change</p>
            <div>
                {result}
                <input value={input1} onChange={(e) => { setInput1(e.target.value) }}></input>
                <input value={input2} onChange={(e) => { setInput2(e.target.value) }}></input>
            </div>
        </>
    )
}

export default UseMemoexample
import React, { useReducer } from 'react'

const initialCount = 0
function reducerIncrement(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state > 0 ? state - 1:state
        default:
            throw new Error();
    }
}




function UseReducerExample() {

    const [state, dispatch] = useReducer(reducerIncrement, initialCount)


    return (
        <div>
            {state}
            <button onClick={() => dispatch({ type: 'increment' })}>Add</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Remove</button>

        </div>
    )
}

export default UseReducerExample
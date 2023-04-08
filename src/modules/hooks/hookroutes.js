import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import UseReducerExample from './useReducer/useReducer'
import UseStateExample from './useStated/useState'

export const Hookroutes = createBrowserRouter([
    {
        path: "/useState",
        element: <UseStateExample></UseStateExample>
    },
    {
        path: "/useReducer",
        element: <UseReducerExample></UseReducerExample>
    }
])

import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const ListofArray = [{ 1: "da" }, { 2: "fa" }, { 4: "da" }]
    console.log(ListofArray )
    const getUpperCase = ListofArray.reduce((previousvalue, currentvalue, currentindex) => {
        console.log({ ...previousvalue, ...currentvalue })
        return { ...previousvalue, ...currentvalue }
    })

    // console.log(getUpperCase)
    return (
        <>
            <div>Login</div>
            <button
                onClick={() => { navigate('/logout') }}

            >Login</button>
        </>
    )
}

export default Login
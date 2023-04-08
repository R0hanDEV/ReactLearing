import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate()
    return (
        <><div>Logout</div>
        <button
        onClick={() => {navigate('/login')}}
        >Logout
        </button></>
    )
}

export default Logout
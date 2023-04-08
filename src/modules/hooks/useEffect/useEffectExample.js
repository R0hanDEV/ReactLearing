import React, { useEffect, useState } from 'react'

function UseEffectExample() {
    const [count, setcount] = useState(0)
    const [user, setUser] = useState([])
    async function FetchData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }
    useEffect(() => {
        FetchData()
    }, [])
    useEffect(() => {
        console.log(count)
    }, [count])



    return (
        <>
            <h3>What is useEffect</h3>
            <p>UseEffect is a react hook that perform side effects in function component.
                <br></br>
                Side effect are the operation that are not related to rendering UI based on input data.
                eg :- For example, consider a component that fetches data from an API and displays it in the UI. The act of fetching data is a side effect, because it affects something outside of the component (i.e. the network). Similarly, setting up an event listener to handle user input is a side effect, because it affects something outside of the component (i.e. the browser's event system).
            </p>
            <button onClick={() => {
                setcount(prevcount => prevcount + 1)
            }}>Click</button>
            {user.map((item, index) => {
                return <li>{index.length <= 5 ? "nothing" : item.name}</li>
            })}
            The useEffect hook takes two arguments: a function that contains the side effect code, and an optional array of dependencies that determine when the effect should be run. In this case, we pass an empty array as the second argument to ensure that the effect runs only once, when the component mounts.


           
        </>
    )
}

export default UseEffectExample
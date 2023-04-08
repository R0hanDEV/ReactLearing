import React from 'react'

function UseEffectinterview() {
    return (
        <div>
            Q: What is the useEffect hook in React?
            A: useEffect is a hook in React that allows you to perform side effects in function components. It replaces the componentDidMount, componentDidUpdate, and componentWillUnmount methods in class components.

            Q: What is the purpose of the second argument in the useEffect hook?
            A: The second argument is an array of dependencies that determines when the effect should be re-run. If any of the dependencies change, the effect will be re-run. If the array is empty, the effect will only be run once, when the component mounts.

            Q: How do you clean up effects in React?
            A: You can return a function from the effect that cleans up any resources that were set up. This function will be called when the component unmounts, or when the dependencies of the effect change.

            Q: How can you prevent a useEffect hook from running on every render?
            You can provide a second argument to the useEffect hook that specifies the dependencies of the effect. If any of the dependencies change, the effect will be re-run. If the array is empty, the effect will only be run once, when the component mounts.

            Q:  why useEffect render twice because of react strick mode?
            In development mode with strict mode enabled, the console.log statement inside the useEffect hook will be called twice: once during the "mounting" phase, and again during the "commit" phase. This is because strict mode intentionally re-renders components twice in development mode to help identify any issues that might not be caught in production.

            It's worth noting that this behavior only happens in development mode with strict mode enabled. In production mode, the useEffect hook will only be called once per render.

        </div>
    )
}

export default UseEffectinterview
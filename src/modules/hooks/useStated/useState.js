import React, { useState } from 'react'

function UseStateExample() {
    const [inputValue, setInputValue] = useState("")
    const [count, setCount] = useState(0)

    const handleSetvalue = (e) => {
        setInputValue(e.target.value);
    }

    const onClickChangeBack = (e) => {
        switch (e.target.innerText) {
            case "red":
                document.body.style.background = "red"
                break
            case "blue":
                document.body.style.background = "blue"
                break
            case "green":
                document.body.style.background = "green"
                break
            case "orange":
                document.body.style.background = "orange"
                break
            default:
                document.body.style.background = "white"
                break
        }
    }

    return (
        <>
            <h1>What is useState</h1>
            <p> useState is a react hook which is use to store the state of element.</p>
            <p>below are the list of example that store the state of each element.</p>
            <input
                onKeyUp={(e) => handleSetvalue(e)}
                name='name'
            ></input>

            {
                inputValue
            }


            <button
                onClick={(e) => onClickChangeBack(e)}
            >red</button>
            <button

                onClick={onClickChangeBack}
            >blue</button>
            <button
                onClick={onClickChangeBack}
            >Click</button>
            <button
                onClick={onClickChangeBack}
            >green</button>
            <button

                onClick={onClickChangeBack}
            >orange</button>

            <br></br>

            <h5>'How do you pass state values and update functions down to child components using props?'</h5>
            <p> we will create child component that will pass props as state and in child component we'll update the component state</p>
            <ChildCompponet count={count} setCount={setCount} />


            <h5> problems that might acour while using usestate</h5>
            <p>
                problem 1
                If you forgot to put initial value while define the state. it will cause run time error as initial value is undefine and react doesnt know what is the initial state valu.
            
                <br></br>
                problem 2
                race condition
                When you trying to update state with previous updated state. At that time you need to use  functional form of setState.
                By using the previous state as an argument to the update function, you ensure that the updates to the state are applied in the correct order, regardless of the order in which they were called. This can help avoid race conditions and ensure that the state is updated correctly.
            </p>
        </>

    )
}


function ChildCompponet(props) {
    console.log(props)
    const marginleft = {
        marginLeft: '10px',
    }
    return <>

        <h5 style={marginleft}>{props.count}</h5>

        <button

            onClick={() => {
                props.setCount(props.count + 1)
            }}

        >increment count</button>

        <button
            onClick={() => {
                props.setCount(props.count !== 0 ? props.count - 1 : props.count)
            }}
        >decrement count</button>
    </>

}

export default UseStateExample
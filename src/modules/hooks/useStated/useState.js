import React, { useState } from 'react'

function UseStateExample() {
    const [inputValue, setInputValue] = useState("")

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
                document.body.style.background = "black"
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

        </>
    )
}

export default UseStateExample
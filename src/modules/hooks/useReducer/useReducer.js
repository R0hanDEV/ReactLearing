import React from 'react'

function UseReducerExample() {
    const todoList = [
        {
            id: 1,
            todoname: "1"
        },
        {
            id: 2,
            todoname: "2"
        },
        {
            id: 3,
            todoname: "3"
        }
    ]



    return (
        <div>

            todoList


            {
                todoList.map((element) => {
                    return <div> {element.todoname}
                        <button value={element.id} >Add</button>

                    </div>
                })
            }
        </div>
    )
}

export default UseReducerExample
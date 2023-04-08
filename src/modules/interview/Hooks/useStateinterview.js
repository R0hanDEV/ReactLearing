import React from 'react'

const interviewQuestion = [
    'What is the useState hook and why is it useful in ReactJS?',
    'What is the difference between using the useState hook and defining state in a class component?',
    'How do you initialize a state variable with a complex object or array using the useState hook?',
    'How do you handle state updates that depend on the previous state using the useState hook?',
    'What are some common use cases for the useState hook in ReactJS?',
    'How do you test components that use the useState hook using unit testing or integration testing?',
    'How do you optimize performance when using the useState hook in large or complex components?',
]


const answersArray =[
    'useState is a built-in hook in ReactJS that allows functional components to have state variables and update them. It is useful in ReactJS because it provides a simple and easy way to add state to functional components, which previously were stateless. This enables developers to write more concise and reusable code.',
   'In class components, state is defined in the constructor and can only be updated using the setState method. In functional components, state can be defined and updated using the useState hook. The main difference is that useState is a simpler and more concise way to define and update state in functional components, while setState in class components is more verbose and has some performance overhead.',
   'const [person, setPerson] = useState({ name: "John", age: 30 })',
]
function UseStateinterview() {


    return (
        <>
            <h5>List of react interview question</h5>
            {
                interviewQuestion.map((item, index) => {
                    return <>
                        <h5>{index + 1}:- {item}</h5>
                        <p>{answersArray[index]}</p>
                    </>
                })
            }
        </>
    )
}




export default UseStateinterview
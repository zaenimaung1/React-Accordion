import React, { useState } from "react";
import App from "./App";

const FaqSesstion = () => {
  const [questions,setQuestions] = useState([
    {
      id: 1,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes it easier to create React components by mixing HTML with JavaScript logic.",
        isOpen : false
    },
    {
      id: 2,
      question: "What are React components?",
      answer:
        "React components are the building blocks of a React application. They are reusable pieces of UI that can have their own state and logic.",
        isOpen : false      },
    {
      id: 3,
      question:
        "What is the difference between a class component and a functional component in React?",
      answer:
        "Class components are ES6 classes that extend from React.Component and can have state and lifecycle methods. Functional components are simpler, defined as functions, and use hooks to manage state and lifecycle.",
        isOpen : false },
    {
      id: 4,
      question: "What is state in React?",
      answer:
        "State in React is an object that holds the dynamic data of a component. It allows components to manage and update their own data, which can then be used to render the UI.",
        isOpen : false },
    {
      id: 5,
      question: "What are props in React?",
      answer:
        "Props (short for properties) are read-only attributes passed from parent components to child components. They allow data to flow from parent to child and help make components reusable.",
        isOpen : false },
    {
      id: 6,
      question: "What is the virtual DOM in React?",
      answer:
        "The virtual DOM is a lightweight representation of the actual DOM. React uses it to optimize updates by only re-rendering components when necessary, rather than updating the entire DOM.",
        isOpen : false},
    {
      id: 7,
      question: "What is the purpose of the useEffect hook?",
      answer:
        "The useEffect hook is used to perform side effects in functional components, such as data fetching, setting up subscriptions, or manually changing the DOM.",
        isOpen : true},
    {
      id: 8,
      question: "How do you handle forms in React?",
      answer:
        "Forms in React can be handled using controlled components, where the form data is stored in the component's state, or uncontrolled components, where form data is handled by the DOM.",
        isOpen : false },
    {
      id: 9,
      question: "What is the difference between useState and useReducer?",
      answer:
        "useState is a hook that allows you to add state to functional components. useReducer is a more advanced hook that is used for managing complex state logic, similar to how Redux manages state.",
        isOpen : false},
    {
      id: 10,
      question: "What is React Router?",
      answer:
        "React Router is a library that allows you to manage and navigate between different views or pages in a React application. It helps in creating a single-page application with multiple routes.",
        isOpen : false },
  ]);

  const togglehandle = (id) => {
    setQuestions(questions.map((task) => 
        task.id === id 
        ? {...task, isOpen: !task.isOpen}  // Toggle the `isOpen` state for the selected task
        : {...task, isOpen: false}          // Set `isOpen` to false for all other tasks
    ));
}
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5 font-mono">
        React Frequently Asked Questions
      </h1>

      <div className="flex flex-col font-mono">
        {questions.map((question) => (
          <App key={question.id} faq={question} togglehandle={togglehandle}/>
        ))}
      </div>
    </div>
  );
};

export default FaqSesstion;

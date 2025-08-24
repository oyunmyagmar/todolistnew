"use client";

import { useState } from "react";

const todoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log("todos", todos);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    const newTodos = [...todos, { title: inputValue, isDone: false }];
    setTodos(newTodos);
    setInputValue("");
  };

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        placeholder="add todo"
        onChange={handleOnChange}
      ></input>
      {todos.map((todo, index) => (
        <div className="flex gap-10" key={index + Math.random()}>
          <input type="checkbox" defaultChecked={todo.isDone}></input>
          <div key={index}>{todo.title}</div>
        </div>
      ))}
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};
export default todoPage;

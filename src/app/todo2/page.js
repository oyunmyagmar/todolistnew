"use client";

import { useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //   console.log("todos", todos);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const handleOnClick = () => {
    setTodos([...todos, inputValue]);
  };

  return (
    <div>
      <input
        className="w-40 h-10 rounded-md border border-zinc-200 py-2 px-4 text-sm leading-[17px] text-zinc-500"
        placeholder="add todo"
        onChange={handleOnChange}
      ></input>
      {todos.map((todo, i) => (
        <div key={i}>{todo}</div>
      ))}
      <button onClick={handleOnClick}> Add Count</button>
    </div>
  );
};
export default TodoPage;

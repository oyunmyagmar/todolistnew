"use client";
import { useState } from "react";

export function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClickAdd = () => {
    setTodos([...todos, inputValue]);
    // console.log("add todo", todos);
    setInputValue("");
  };

  const handleOnClickDelete = (index) => {
    // console.log("delete todo", index);
    const filteredTodos = todos.filter((el, i) => i !== index);
    setTodos([...filteredTodos]);
  };

  return (
    <div>
      <div className="flex gap-5">
        <input
          onChange={handleOnChangeInput}
          value={inputValue}
          type="text"
          placeholder="Type here..."
          className="border"
        ></input>
        <button onClick={handleOnClickAdd} className="border p-0.5 bg-gray-100">
          Add Todo
        </button>
      </div>

      <ul className="mt-5">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => handleOnClickDelete(index)}
              className="border p-0.5 bg-gray-100 ml-30"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

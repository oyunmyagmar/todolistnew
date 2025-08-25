import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setTodos([...todos, inputValue]);
    console.log(todos);
  };

  const handleOnClickDelete = (key) => {
    const filteredTodos = todos.filter((el, index) => index !== key);
    console.log("todos", todos);
    setTodos([...filteredTodos]);
  };
  return (
    <div>
      <div className="flex gap-10">
        <input
          className="border"
          onChange={handleOnChange}
          value={inputValue}
        ></input>
        <button onClick={handleOnClick}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <div key={index} className="flex gap-10">
          <li>{todo}</li>
          <button onClick={() => handleOnClickDelete(index)}>Delete</button>
        </div>
      ))}
      <p></p>
    </div>
  );
}

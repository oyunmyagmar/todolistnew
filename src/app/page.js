"use client";

import { useState } from "react";
import { Button, Task } from "@/components";
import { v4 as uuidv4 } from "uuid";

const HomeToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("All");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClickAdd = () => {
    if (inputValue === "") {
      return alert("Please enter a task!");
    }
    setTodos([...todos, { title: inputValue, isDone: false, id: uuidv4() }]);
    setInputValue("");
  };

  const handleOnChangeChecked = (event, id) => {
    const checkedTodo = todos.map((todo) => {
      if (todo.id === id) todo.isDone = event.target.checked;
      return todo;
    });
    setTodos(checkedTodo);
  };

  const handleOnClickDelete = (id) => {
    const filteredRemainedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredRemainedTodos);
  };

  const handleOnClickAll = () => {
    setFilteredStatus("All");
  };

  const handleOnClickActive = () => {
    setFilteredStatus("Active");
  };

  const handleOnClickCompleted = () => {
    setFilteredStatus("Completed");
  };

  const handleOnClickDeleteAllCompleted = () => {
    const remainedFilteredData = todos.filter((el) => {
      return el.isDone == false;
    });
    setTodos(remainedFilteredData);
  };

  const filteredData = todos.filter((todo) => {
    if (filteredStatus === "All") return todo;
    if (filteredStatus === "Active") return !todo.isDone;
    return todo.isDone;
  });

  return (
    <div className="w-full h-screen flex justify-center pt-15 font-sans">
      <div className="w-[377px] h-fit rounded-md py-6 px-4 bg-[#FFFFFF] shadow-[0_0_12px_0_rgba(0,0,0,0.16)] text-center">
        <div className="w-[345px] ">
          <div className="flex flex-col gap-5">
            <h1 className="text-lg leading-7 font-semibold text-black">
              To-Do list
            </h1>
            <div className="flex gap-1.5">
              <input
                onChange={handleOnChange}
                value={inputValue}
                type="text"
                placeholder="Add a new task..."
                className="w-70 h-10 rounded-md border border-zinc-200 py-2 px-4 text-sm leading-[17px] text-zinc-500"
              ></input>
              <Button
                onClick={handleOnClickAdd}
                isActive={true}
                className="text-sm leading-[17px] py-[11.5px] px-4"
                name="Add"
              ></Button>
            </div>

            <div className="flex gap-1.5">
              <Button
                onClick={handleOnClickAll}
                className={"text-xs leading-[15px] py-[8.5px] px-3"}
                name="All"
                filteredStatus={filteredStatus}
              ></Button>
              <Button
                onClick={handleOnClickActive}
                className={"text-xs leading-[15px] py-[8.5px] px-3"}
                name="Active"
                filteredStatus={filteredStatus}
              ></Button>
              <Button
                onClick={handleOnClickCompleted}
                className={"text-xs leading-[15px] py-[8.5px] px-3"}
                name="Completed"
                filteredStatus={filteredStatus}
              ></Button>
            </div>

            <div className="flex flex-col gap-4">
              {filteredData.map((todo, index) => (
                <Task
                  key={todo.id}
                  task={todo}
                  onChange={(event) => handleOnChangeChecked(event, todo.id)}
                  onClick={() => handleOnClickDelete(todo.id)}
                ></Task>
              ))}
            </div>
          </div>

          {todos.length <= 0 ? (
            <p className="mt-8 text-sm leading-[17px] text-[#6B7280]">
              No tasks yet. Add one above!
            </p>
          ) : (
            <div className="w-full h-[37px] mt-5 flex justify-between pt-4 pb-1 text-sm border-t border-zinc-200">
              <p className="text-gray-500">
                {todos.filter((el) => el.isDone).length} of {todos.length} tasks
                completed
              </p>
              <button
                onClick={handleOnClickDeleteAllCompleted}
                className="text-red-500"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>

        <p className="mt-10 text-xs leading-[15px] text-[#6B7280]">
          Powered by{" "}
          <a className="text-[#3B73ED]" href="https://pinecone.mn/">
            Pinecone academy
          </a>
        </p>
      </div>
    </div>
  );
};
export default HomeToDo;

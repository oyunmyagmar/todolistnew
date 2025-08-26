"use client";

import { useState } from "react";

export const Task = ({ task, index, setTodos, todos }) => {
  const handleOnChangeChecked = (event) => {
    setTodos((prev) =>
      prev.map((el, i) => {
        if (i === index) el.isDone = event.target.checked;
        // console.log(event.target.checked);
        return el;
      })
    );
  };
  const handleOnClickDelete = () => {
    const filteredRemainedTodos = todos.filter((todo, ind) => ind !== index);
    setTodos(filteredRemainedTodos);
  };

  return (
    <div className="w-full h-[62px] flex items-center justify-between px-4 rounded-md bg-gray-100">
      <div className="flex gap-2.5 items-center">
        <input
          type="checkbox"
          onChange={handleOnChangeChecked}
          checked={task.isDone}
          className="w-5 h-5 rounded-xs bg-red-700 border border-[#767676]"
        ></input>
        <p
          className={`text-sm text-black leading-[17px] + ${
            task.isDone && "line-through"
          }`}
        >
          {task.title}
        </p>
      </div>

      {task.isDone && (
        <button
          onClick={handleOnClickDelete}
          className="text-sm text-red-500 bg-red-50 px-3 py-[6.5px] rounded-md"
        >
          Delete
        </button>
      )}
    </div>
  );
};

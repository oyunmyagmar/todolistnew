"use client";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Button, Task } from "@/components";

const HomeToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("all");
  // const [filteredTodos, setFilteredTodos] = useState([]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClickAdd = () => {
    setTodos([...todos, { title: inputValue, isDone: false, id: uuidv4() }]);
    setInputValue("");
  };

  const handleOnClickAll = () => {
    setFilteredStatus("all");
  };

  const handleOnClickActive = () => {
    setFilteredStatus("active");
  };

  const handleOnClickCompleted = () => {
    setFilteredStatus("completed");
  };
  const filteredData = todos.filter((el) => {
    if (filteredStatus === "all") return el;
    if (filteredStatus === "active") return !el.isDone;
    return el.isDone;
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
                isActive={false}
                className="text-xs leading-[15px] py-[8.5px] px-3"
                name="All"
              ></Button>
              <Button
                onClick={handleOnClickActive}
                isActive={false}
                className="text-xs leading-[15px] py-[8.5px] px-3"
                name="Active"
              ></Button>
              <Button
                onClick={handleOnClickCompleted}
                isActive={false}
                className="text-xs leading-[15px] py-[8.5px] px-3"
                name="Completed"
              ></Button>
            </div>

            <div className="flex flex-col gap-4">
              {filteredData.map((todo, index) => (
                <Task
                  key={index}
                  task={todo}
                  index={index}
                  setTodos={setTodos}
                  todos={todos}
                ></Task>
              ))}
            </div>

            {/* <div className="w-full h-[37px] flex justify-between pt-4 pb-1 text-sm border-t border-zinc-200">
              <p className="text-gray-500">1 of 2 tasks completed</p>
              <p className="text-red-500">Clear completed</p>
            </div> */}
          </div>

          <p className="mt-8 text-sm leading-[17px] text-[#6B7280]">
            No tasks yet. Add one above!
          </p>
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

// const handleOnChangeChecked = (event) => {
//   setTodos((prev) =>
//     prev.map((el, i) => {
//       if (i === index) el.isDone = event.target.checked;
//       console.log(event.target.checked);
//       return el;
//     })
//   );
// };
// const handleOnClickDelete = () => {
//   const filteredTodos = todos.filter((todo, i) => i !== index);
//   setTodos(filteredTodos);
// };

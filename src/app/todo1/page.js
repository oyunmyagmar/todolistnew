"use client";

import { useState } from "react";

const TodoPage = () => {
  const taskArr = [
    {
      taskName: "to do homework",
      isCompleted: true,
    },
    {
      taskName: "to do exercise",
      isCompleted: false,
    },
    {
      taskName: "to do dinner",
      isCompleted: false,
    },
    {
      taskName: "to do cleaning",
      isCompleted: true,
    },
  ];

  const [task, setTask] = useState(0);
  console.log(task);

  return (
    <div>
      {taskArr[task].taskName}
      <button onClick={() => setTask(task + 1)}> Add Count</button>
    </div>
  );
};
export default TodoPage;

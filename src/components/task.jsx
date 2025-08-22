"use client";
export const Task = ({ task }) => {
  console.log(task);
  return (
    <div className="w-full h-[62px] flex items-center justify-between px-4 rounded-md bg-gray-100">
      <div className="flex gap-2.5 items-center">
        <input
          type="checkbox"
          defaultChecked={task.isCompleted}
          className="w-5 h-5 rounded-xs bg-red-700 border border-[#767676]"
        ></input>
        <p
          className={`text-sm text-black leading-[17px] + ${
            task.isCompleted && "line-through"
          }`}
        >
          {task.taskName}
        </p>
      </div>
      {task.isCompleted && (
        <button className="text-sm text-red-500 bg-red-50 px-3 py-[6.5px] rounded-md">
          Delete
        </button>
      )}
    </div>
  );
};

export const Task = ({ task, onChange, onClick }) => {
  return (
    <div className="w-full h-[62px] flex items-center justify-between px-4 rounded-md bg-gray-100">
      <div className="flex gap-2.5 items-center">
        <input
          type="checkbox"
          onChange={onChange}
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
          onClick={onClick}
          className="text-sm text-red-500 bg-red-50 px-3 py-[6.5px] rounded-md"
        >
          Delete
        </button>
      )}
    </div>
  );
};

// const handleOnChangeChecked = (event) => {
//   setTodos((prev) =>
//     prev.map((el, i) => {
//       if (i === index) el.isDone = event.target.checked;
//       // console.log(event.target.checked);
//       return el;
//     })
//   );
// };
// const handleOnClickDelete = () => {
//   const filteredRemainedTodos = todos.filter((todo, ind) => ind !== index);
//   setTodos(filteredRemainedTodos);
// };

// {
//   filteredData.length <= 0 && (
//     <p className="mt-8 text-sm leading-[17px] text-[#6B7280]">
//       No tasks yet. Add one above!
//     </p>
//   );
// }
// <div className="w-full h-[37px] mt-5 flex justify-between pt-4 pb-1 text-sm border-t border-zinc-200">
//   <p className="text-gray-500">
//     {todos.filter((el) => el.isDone).length} of {todos.length} tasks completed
//   </p>
//   <button onClick={handleOnClickDeleteAllCompleted} className="text-red-500">
//     Clear completed
//   </button>
// </div>;

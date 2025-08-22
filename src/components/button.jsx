export const Button = ({ className, name, isActive }) => {
  // console.log(props);
  return (
    <button
      className={
        "rounded-md " +
        className +
        `${
          isActive ? " bg-blue-500 text-white" : " bg-gray-100 text-[#363636]"
        }`
      }
    >
      {name}
    </button>
  );
};

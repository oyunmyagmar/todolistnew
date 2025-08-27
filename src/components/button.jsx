export const Button = ({
  className,
  name,
  onClick,
  isActive,
  filteredStatus,
  isClicked,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-md bg-gray-100 text-[#363636] " +
        className +
        `${filteredStatus === name ? " !bg-blue-500 text-white" : ""}` +
        `${isActive ? " !bg-blue-500 text-white" : ""}`
      }
    >
      {name}
    </button>
  );
};

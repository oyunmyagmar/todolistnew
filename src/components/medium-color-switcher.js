import { useState } from "react";

export function ColorSwitcher() {
  const [bg, setBg] = useState("null");

  const handleOnChange = (event) => {
    console.log(event, "event");
    setBg(event.target.value);
  };

  return (
    <div>
      <select onChange={handleOnChange}>
        <option value={""}>Empty</option>
        <option value={"bg-red-500"}>Red</option>
        <option value={"bg-blue-500"}>Blue</option>
        <option value={"bg-black"}>Black</option>
        <option value={"bg-white"}>White</option>
        <option value={"bg-indigo-500"}>Indigo</option>
      </select>
      <div className={`w-20 h-20 border ${bg}`}></div>
    </div>
  );
}

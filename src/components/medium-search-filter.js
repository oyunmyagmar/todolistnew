import { useState } from "react";

const items = ["Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grape"];
items.forEach((item, index) => console.log(item.split("").includes("a")));
console.log(Object.values(items));

export function SearchFilter() {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input
        className="border"
        type="text"
        onChange={handleOnChange}
        value={inputValue}
      ></input>
      <ul>
        {items.filter((item, index) => {
          item.split("").includes(inputValue) && <li>{"item.value"}</li>;
        })}
      </ul>
    </div>
  );
}

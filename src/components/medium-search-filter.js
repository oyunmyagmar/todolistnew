import { useState } from "react";

export function SearchFilter() {
  const items = [
    "Apple",
    "Banana",
    "Carrot",
    "Date",
    "Eggplant",
    "Fig",
    "Grape",
  ];
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleOnChange}></input>
      <ul>
        {items.forEach((item) => (
          <li>{items}</li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const items = ["Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grape"];

export function SearchFilter() {
  const [inputValue, setInputValue] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(inputValue)
  );

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
        {filteredItems.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
// {
//   items
//     .filter((item) => item.toLowerCase().includes(inputValue))
//     .map((el) => <li key={el}>{el}</li>);
// }

"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const items = ["Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grape"];

export function SearchFilter() {
  const [inputValue, setInputValue] = useState("");
  const [filteresItems, setFilteredItems] = useState(items);
  console.log(items);
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
        {items.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
        {filteresItems.filter(
          (item, id) =>
            item.toLowerCase().includes(inputValue) && <li>{item}</li>
        )}
      </ul>
    </div>
  );
}

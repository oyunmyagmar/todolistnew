"use client";
import { useState } from "react";

const items = ["Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grape"];

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
        {items.filter(
          (item, index) =>
            item.toLowerCase().includes(inputValue) && <li>{item}</li>
        )}
      </ul>
    </div>
  );
}

"use client";
import { useState } from "react";

export function InputField() {
  const [inputValue, setInputValue] = useState("");
  const handleOnChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        onChange={handleOnChangeInput}
        value={inputValue}
        className="border"
        type="text"
      ></input>
      <p>Input text: {inputValue}</p>
    </div>
  );
}

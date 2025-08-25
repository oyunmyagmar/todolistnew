import { useState } from "react";

export function InputField() {
  const [inputValue, setInputValue] = useState([]);
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input
        className="border"
        onChange={handleOnChange}
        type="text"
        value={inputValue}
      ></input>
      <p>Input text: {inputValue}</p>
    </div>
  );
}

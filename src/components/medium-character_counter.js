import { useState } from "react";

export function CharacterCounter() {
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
      <p>Count: {inputValue.length}</p>
    </div>
  );
}

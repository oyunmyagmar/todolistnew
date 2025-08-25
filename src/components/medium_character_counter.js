import { useState } from "react";

export function CharacterCounter() {
  const [inputValue, setInputValue] = useState("");

  const handleOnChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input
        onChange={handleOnChangeInput}
        value={inputValue}
        type="text"
        className="border"
      ></input>
      <p>Character count: {inputValue.length}</p>
    </div>
  );
}

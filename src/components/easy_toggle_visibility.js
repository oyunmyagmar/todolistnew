import { useState } from "react";

export function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const handleOnClickToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        onClick={handleOnClickToggleVisibility}
        className="border p-0.5 bg-gray-100"
      >
        Show/ Hide Text
      </button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}

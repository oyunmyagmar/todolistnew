"use client";
import { useState } from "react";

export function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const handleOnClickToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        onClick={handleOnClickToggle}
        className="border p-0.5 bg-gray-100"
      >
        Show/ Hide Text
      </button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}

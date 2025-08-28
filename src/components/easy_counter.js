"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const handleOnClickIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button
        onClick={handleOnClickIncrement}
        className="border p-0.5 bg-gray-100"
      >
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

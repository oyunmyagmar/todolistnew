"use client";

import { useState } from "react";

export function ColorSwitcher() {
  const [bg, setBg] = useState("null");
  const handleOnChangeColor = (event) => {
    setBg(event.target.value);
  };

  return (
    <div className="flex gap-4">
      <select onChange={handleOnChangeColor} className="h-6">
        <option value={""}>Empty</option>
        <option value={"bg-red-500"}>Red</option>
        <option value={"bg-blue-500"}>Blue</option>
        <option value={"bg-yellow-500"}>Yellow</option>
        <option value={"bg-green-500"}>Green</option>
        <option value={"bg-neutral-500"}>Neutral</option>
      </select>
      <div
        className={"w-50 h-20 border border-indigo-100 mb-5 " + `${bg}`}
      ></div>
    </div>
  );
}

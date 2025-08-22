"use client";

import { useState } from "react";

const TodoPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>add count</button>
    </div>
  );
};
export default TodoPage;

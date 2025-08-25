import { useState } from "react";

export function ToggleVisibility() {
  const [toggle, setToggle] = useState(true);
  const handleOnClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button onClick={handleOnClick}>Show/Hide Text</button>
      {toggle && <p>"text"</p>}
    </div>
  );
}

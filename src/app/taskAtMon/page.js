"use client";

import {
  Counter,
  InputField,
  ToggleVisibility,
  CharacterCounter,
  TodoList,
  ColorSwitcher,
  SearchFilter,
  DragDropList,
} from "@/components";

const HomeTask = () => {
  return (
    <div>
      <div className="mb-10 ml-10">
        <h5>1. Counter</h5>
        <Counter></Counter>
      </div>
      <div className="mb-10 ml-10">
        <h5>2. Controlled Input Field</h5>
        <InputField></InputField>
      </div>
      <div className="mb-10 ml-10">
        <h5>3. Toggle Visibility</h5>
        <ToggleVisibility></ToggleVisibility>
      </div>
      <div className="mb-10 ml-10">
        <h5>4. Character Counter</h5>
        <CharacterCounter></CharacterCounter>
      </div>
      <div className="mb-10 ml-10">
        <h5>5. Todo List</h5>
        <TodoList></TodoList>
      </div>
      <div className="mb-10 ml-10">
        <h5>6. Color Switcher</h5>
        <ColorSwitcher></ColorSwitcher>
      </div>
      <div className="mb-10 ml-10">
        <h5>7. Search Filter</h5>
        <SearchFilter></SearchFilter>
      </div>
      <div className="mb-10 ml-10">
        <h5>8. Drag and Drop List</h5>
        <DragDropList></DragDropList>
      </div>
    </div>
  );
};
export default HomeTask;

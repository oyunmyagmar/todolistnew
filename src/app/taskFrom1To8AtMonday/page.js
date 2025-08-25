"use client";

import {
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
      <div>
        <InputField></InputField>
      </div>
      <div>
        <ToggleVisibility></ToggleVisibility>
      </div>
      <div>
        <CharacterCounter></CharacterCounter>
      </div>
      <div>
        <TodoList></TodoList>
      </div>
      <div>
        <ColorSwitcher></ColorSwitcher>
      </div>
      <div>
        <SearchFilter></SearchFilter>
      </div>
      <div>
        <DragDropList></DragDropList>
      </div>
    </div>
  );
};
export default HomeTask;

"use client";

import {
  InputField,
  ToggleVisibility,
  CharacterCounter,
  TodoList,
  ColorSwitcher,
  SearchFilter,
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
    </div>
  );
};
export default HomeTask;

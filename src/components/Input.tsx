import React, { FC, useRef } from "react";
import "./input.css";

interface TodosObj {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Input: FC<TodosObj> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task..."
          className="input__box"
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default Input;

import React, { FC, useState } from "react";
import "./App.css";

import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <>
      <div className="App">
        <span className="heading">Note Taker</span>
        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
        {/* {todos.map((x) => (
          <li>{x.todo}</li>
        ))} */}
      </div>
    </>
  );
};

export default App;

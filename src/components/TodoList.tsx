import React, { FC } from "react";

import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      <div className="todos">
        {todos.map((todo) => (
          //   <li>{todo.todo}</li>
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;

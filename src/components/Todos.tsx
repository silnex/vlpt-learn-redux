import React, { ChangeEvent, FC, useState } from "react";

interface TodoInterface {
  id: number;
  text: string;
  done: boolean;
}

const TodoItem = React.memo(
  ({ todo, onToggle }: { todo: TodoInterface; onToggle: Function }) => {
    return (
      <li
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </li>
    );
  }
);

const TodoList = React.memo(
  ({ todos, onToggle }: { todos: TodoInterface[]; onToggle: Function }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
      </ul>
    );
  }
);

const Todos = ({
  todos,
  onCreate,
  onToggle,
}: {
  todos: TodoInterface[];
  onCreate: Function;
  onToggle: Function;
}) => {
  const [text, setText] = useState("");
  const onChange = (e: any) => setText(e.target.value);
  const onSubmit = (e: any) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} placeholder="input todo" onChange={onChange} />

        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default Todos;

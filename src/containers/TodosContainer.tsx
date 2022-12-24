import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text: string) => dispatch(addTodo(text));
  const onToggle = useCallback(
    (id: number) => dispatch(toggleTodo(id)),
    [dispatch]
  );

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;

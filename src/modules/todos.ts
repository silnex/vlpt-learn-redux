const ADD_TODO = "todo/ADD_TODO";
const TOGGLE_TODO = "todo/TOGGLE_TODO";

let nextId = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
});

interface TodoInterface {
  id: number;
  text: string;
  done: boolean;
}

const initialStat: TodoInterface[] = [];

export default function todos(state = initialStat, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
}

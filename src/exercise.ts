import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const increase = () => {
  return {
    type: "INCREASE",
  };
};
const decrease = () => {
  return {
    type: "DECREASE",
  };
};
const changeText = (text: string) => {
  return {
    type: "CHANGE_TEXT",
    text,
  };
};
const addToList = (item: object) => {
  return {
    type: "ADD_TO_LIST",
    item,
  };
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("hello"));
store.dispatch(addToList({ id: 1, text: "wow" }));

export default "";

import { createStore } from "redux";

//Setting a default state if there are no state defined.
const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

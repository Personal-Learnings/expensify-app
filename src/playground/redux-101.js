import { createStore } from "redux";

//Action Generator, if payload doesnt exist default it to empty object
/*const incrementCount = (payload = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
});
*/
//The Above Code is Simplified as below using
//Object Destructuring in
//Parameters and assigning default value
// { incrementBy = 1} this statement says get the incrementBy
// property from the given input and assign 1 if its undefined.
// {} this says id the object is undefined assign a empty object.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count = 1 } = {}) => ({
  type: "SET",
  count
});

//Pure Function
const add = (a, b) => a + b;

//Not a Pure Function
const a = 5;
const add = b => a + b;

//Setting a default state if there are no state defined.
//The below function is called Reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return { count: state.count + incrementBy };

    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return { count: state.count - decrementBy };

    case "RESET":
      return { count: 0 };

    case "SET":
      return { count: action.count };

    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount());
store.dispatch(setCount({ count: 120 }));
store.dispatch(resetCount());

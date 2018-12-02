//Expenses Reducers

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense]; // Using Spread Operator instead of push as we must not change the state here
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id); //using filter for not to modify array and shorthand+destruct
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updatedExpense //replacing all the properties in object
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;

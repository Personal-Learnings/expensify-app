import uuid from "uuid";

//Add Expense
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});

//Edit Expense
export const editExpense = (id, updatedExpense) => ({
  type: "EDIT_EXPENSE",
  id,
  updatedExpense
});

//Remove Expense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

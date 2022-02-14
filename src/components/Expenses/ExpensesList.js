import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList({ expenses }) {
  let expensesContent = <p> No expenses found.</p>;

  //if your ENTIRE JSX content changes as a result of a condition, you can add an if
  //check where you return as JSX block.

  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses were found.</h2>;
  } else
    return (
      <ul className="expenses-list">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
}

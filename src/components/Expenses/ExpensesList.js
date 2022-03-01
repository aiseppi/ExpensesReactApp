import React from "react";
import ExpenseItem from "./ExpenseItem";
// import "./ExpensesList.css";
import styled from "styled-components";

export default function ExpensesList({ expenses }) {
  //if your ENTIRE JSX content changes as a result of a condition, you can add an if
  //check where you return as JSX block.
  const StyledUl = styled.ul`
    list-style: none;
    padding: 0;

    & .expenses-list__fallback {
      color: white;
      text-align: center;
    }
  `;

  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses were found.</h2>;
  } else
    return (
      <StyledUl className="expenses-list">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </StyledUl>
    );
}

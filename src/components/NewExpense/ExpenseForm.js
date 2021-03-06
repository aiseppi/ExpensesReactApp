import React, { useState } from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button/Button";
import { FormControl } from "@material-ui/core";

let StyledButton = styled(Button)`
  margin: 1em;
  padding: 0.25em 1em;
  color: #f18c8e;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;

  @media (min-width: 580px) {
    width: auto;
  }
`;

let ExpenseControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  @media (min-width: 580px) {
    width: auto;
  }
`;

let ExpenseControls = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    max-width: 90%;
    @media screen and (min-width: 580px) {
      width: 20rem;
      max-width: 100%;
    }
  }
`;
const ExpenseForm = ({ onCancel, onSaveExpenseData, expenseTypes }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  console.log(expenseTypes);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <ExpenseControl>
        <ExpenseControls>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </ExpenseControls>
        <ExpenseControls>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </ExpenseControls>
        <ExpenseControls>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </ExpenseControls>
        <FormControl fullWidth></FormControl>
      </ExpenseControl>

      <div className="new-expense__actions">
        <StyledButton type="button" onClick={onCancel}>
          Cancel
        </StyledButton>
        <StyledButton type="submit" variant="contained" color="secondary">
          Add Expense
        </StyledButton>
      </div>
    </form>
  );
};

export default ExpenseForm;

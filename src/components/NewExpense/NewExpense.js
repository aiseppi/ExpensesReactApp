import React, { useState } from "react";
import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";
import Button from "@material-ui/core/Button/Button";

const NewExpense = ({ onAddExpense, categories }) => {
  const [expenseType, setExpenseType] = useState({ categories });
  const [isEditing, setIsEditing] = useState(false);

  const StyledDiv = styled.div`
    /* background-color: #fff;
     */
    background-color: rgb(0, 0, 0, 0.6);
    padding: 1rem;
    margin: 0 auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    color: #f9f8f6;

    & Button {
      font: inherit;
      cursor: pointer;
      padding: 1rem 2rem;
      border: 1px solid #735a4c;
      background-color: #735a4c;
      color: white;
      border-radius: 12px;
      margin-right: 1rem;
    }

    & Button:hover,
    & Button:active {
      background-color: #878c61;
      border-color: #878c61;
    }

    & Button.alternative {
      color: #220131;
      border-color: transparent;
      background-color: transparent;
    }

    & Button.alternative:hover,
    & Button.alternative:active {
      background-color: #ddb3f8;
    }
  `;

  const saveExpenseDataHandler = (enteredExpenseData, categories) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHander = () => {
    setIsEditing(true);
  };

  const stopEditingHander = () => {
    setIsEditing(false);
  };
  return (
    <StyledDiv className="new-expense">
      {!isEditing && (
        <Button onClick={startEditingHander}>Add New Expense</Button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHander}
          expenseTypes={expenseType}
        />
      )}
    </StyledDiv>
  );
};

export default NewExpense;

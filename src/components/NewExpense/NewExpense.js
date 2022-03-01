import React, { useState } from "react";
import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";
import Button from "@material-ui/core/Button/Button";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const StyledDiv = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin: 0 auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

    & Button {
      font: inherit;
      cursor: pointer;
      padding: 1rem 2rem;
      border: 1px solid #f1d1b5;
      background-color: #974063;
      color: white;
      border-radius: 12px;
      margin-right: 1rem;
    }

    & Button:hover,
    & Button:active {
      background-image: linear-gradient(
        #ff9678,
        #f54768,
        #974063,
        #41436a,
        #2a3950
      );
      border-color: #f18c8e;
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

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
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
        />
      )}
    </StyledDiv>
  );
};

export default NewExpense;

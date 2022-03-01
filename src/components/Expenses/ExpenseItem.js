import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import styled from "styled-components";

export default function ExpenseItem(props) {
  const StyledCard = styled(Card)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem 0;
    background-color: #2a3950;

    & .expense-item__description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-end;
      flex-flow: column-reverse;
      justify-content: flex-start;
      flex: 1;
    }

    & h2 {
      color: #3a3a3a;
      font-size: 1rem;
      flex: 1;
      margin: 0 1rem;
      color: white;
    }

    & .expense-item__price {
      font-size: 1rem;
      font-weight: bold;
      color: white;
      background-color: #974063;
      border: 1px solid white;
      padding: 0.5rem;
      border-radius: 12px;
    }

    @media (min-width: 580px) {
      & .expense-item__description {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex: 1;
      }

      & .expense-item__description h2 {
        font-size: 1.25rem;
      }

      & .expense-item__price {
        font-size: 1.25rem;
        padding: 0.5rem 1.5rem;
      }
    }
  `;
  return (
    <li>
      <StyledCard>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </StyledCard>
    </li>
  );
}

import React, { useState } from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
// import "./ExpenseItemList.css";

const StyledCard = styled(Card)`
  padding: 1rem;
  background-color: rgb(0, 0, 0, 0.6);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  & .chart {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    & .chart {
      display: flex;
    }
  }
`;
const ExpenseItemList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <StyledCard className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart className="chart" expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </StyledCard>
  );
};

export default ExpenseItemList;

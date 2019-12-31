import React from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

import Button from "./Button";

registerLocale("uk", uk);

const Calendar = ({ selectedDate, handleDateChange }) => {
  const dateToday = () => {
    handleDateChange(Date.now());
  };

  const anyDate = () => {
    handleDateChange(null);
  };

  return (
    <DateWrapper>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        locale="uk"
        dateFormat="dd.MM.yyyy"
        placeholderText="Будь-яка дата"
      />
      <Button onClick={anyDate}>
        <span>Будь-яка дата</span>
      </Button>
      <Button onClick={dateToday}>
        <span>Сьогодні</span>
      </Button>
    </DateWrapper>
  );
};

const DateWrapper = styled.div`
  margin: auto;
  margin-top: 1rem;
  width: 25rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: var(--main);
  }

  input {
    height: 2rem;
    padding-left: 1rem;
  }

  input:focus {
    outline: 1px solid var(--mainDark);
  }

  button {
    height: 2rem;
  }
`;

export default Calendar;

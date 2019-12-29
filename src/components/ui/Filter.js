import React, { useState } from "react";
import styled from "styled-components";

const Filter = ({ options, defaultOption, defaultValue, handleFiltering }) => {
  // Tracking active element to set class name
  const [activeIndex, setactiveIndex] = useState(0);

  // Passing value to filtering handle and seting active element
  const handleChange = (value, index) => {
    setactiveIndex(index);
    handleFiltering(value);
  };

  // Getting default option and all options into one array
  const allOptions = [{ name: defaultOption, value: defaultValue }, ...options];

  return (
    <FilterWrapper>
      {/* Rendering options */}
      {allOptions.map((option, index) => {
        return (
          <Option
            key={index}
            className={activeIndex === index && "active"}
            onClick={() => handleChange(option.value, index)}
          >
            {option.name}
          </Option>
        );
      })}
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  /* Filter styling */
  width: 100%;
  margin-top: 1rem;
  background-color: var(--main);
  /* Options display */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Option = styled.span`
  /* Option styling */
  box-sizing: border-box;
  width: 13.5rem;
  padding: 0.3rem 2rem;
  border: 2px solid var(--main);
  background-color: var(--main);
  color: var(--mainWhite);
  transition: var(--mainTransition);
  text-align: center;
  /* Assuring single line and set width */
  overflow: hidden;
  white-space: nowrap;

  &.active {
    background-color: var(--mainWhite);
    color: var(--main);
  }
  &:hover {
    background-color: var(--mainWhite);
    color: var(--main);
    cursor: pointer;
  }
`;

export default Filter;

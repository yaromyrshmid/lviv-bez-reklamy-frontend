import styled from "styled-components";

const Button = styled.button`
  /* Styling Button */
  outline: none;
  text-decoration: none;
  border-radius: 0px;
  height: 40px;
  width: ${props => (props.width ? `${props.width}` : "100px")};
  background-color: ${props =>
    props.empty ? "var(--mainWhite)" : "var(--main)"};
  border: 1px solid var(--main);
  color: ${props => (props.empty ? "var(--main)" : "var(--mainWhite)")};
  cursor: pointer;

  /* Danger button */
  background-color: ${props => props.danger && "var(--notfound)"};
  border: ${props => props.danger && "1px solid var(--mainWhite)"};

  /* Adding margin through props */
  margin: ${props => props.margin};

  &:hover,
  &:active,
  &:visited,
  &:focus {
    text-decoration: none;
    outline: none;
  }

  /* Positioning inside span */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Active button styling */

  /* Disabled button styling */
  &:disabled {
    color: var(--lighter);
    border: 1px solid var(--lighter);
    background-color: var(--mainWhite);
    cursor: default;
  }

  &:disabled:hover {
    animation: none;

    span {
      animation: none;
    }
  }

  /* Animating button and inside span */
  &:hover {
    animation: rotate 0.7s ease-in-out both;

    span {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
`;

export default Button;

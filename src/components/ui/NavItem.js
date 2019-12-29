import styled from "styled-components";

const NavItem = styled.span`
  & {
    font-size: 1.2rem;
    padding-top: 0.4rem;
    margin: 0;
    width: 8em;
    text-align: center;
    position: relative;
    transition: 0.3s;
  }

  a {
    color: var(--lighter);
  }

  a.active {
    color: var(--mainDark);
  }

  a:hover {
    color: var(--mainLight);
    transition: all 0.4s linear;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    background-color: var(--mainWhite);
    border-radius: 50%;
    transition: 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5);
    top: calc(50% - 0.4em / 2);
  }

  &::before {
    left: 0;
    z-index: -1;
  }
  &::after {
    right: 0;
    z-index: -2;
  }

  &:hover {
    a {
      color: var(--mainLight);
      transition: all 0.4s linear;
    }
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: var(--lighter);
  }

  &:hover::before {
    top: 0;
  }

  &:hover::after {
    right: -0.4em;
    filter: brightness(0.5);
  }
`;

export default NavItem;

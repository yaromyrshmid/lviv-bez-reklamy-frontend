import React from "react";
import styled from "styled-components";

const Modal = ({ children, closeModal }) => {
  return (
    <ModalWrapper>
      <Backdrop onClick={closeModal} />
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalContent = styled.div`
  height: 30rem;
  width: 20rem;
  background-color: white;
  position: relative;
  margin: auto;
  margin-top: 10rem;
  z-index: 101;
  opacity: 1;
`;

export default Modal;

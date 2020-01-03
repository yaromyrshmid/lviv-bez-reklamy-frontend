import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Modal, Button } from "../";
import { clearErrors } from "../../../redux/actions/errorActions";

const ErrorInModal = ({ error, clearErrors }) => {
  return (
    <Modal closeModal={clearErrors}>
      <ErrorWrapper>
        <p>{error}</p>
        <Button margin="1rem auto 0 auto">
          <span>Закрити</span>
        </Button>
      </ErrorWrapper>
    </Modal>
  );
};

const ErrorWrapper = styled.div`
  padding: 1rem;
`;

export default connect(null, { clearErrors })(ErrorInModal);

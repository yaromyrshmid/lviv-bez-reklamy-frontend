import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { Button } from "../ui";
import { updateMarkerStatus } from "../../redux/actions/adminActions";
import statuses from "../../utils/statuses";

const UpdateMarkerStatusForm = ({
  updateMarkerStatus,
  errors,
  id,
  currentStatus
}) => {
  const [newStatus, setnewStatus] = useState("");

  const onChange = e => {
    setnewStatus(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    updateMarkerStatus(newStatus, id);
  };

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <label>Змінити статус:</label>{" "}
        <select onChange={onChange}>
          <option value="">--Оберіть новий статус--</option>
          {statuses.map(stat => (
            <option value={stat.value} key={stat.value}>
              {stat.ukr}
            </option>
          ))}
        </select>
        <Button
          type="submit"
          disabled={newStatus === currentStatus.to || newStatus === ""}
        >
          <span>Змінити</span>
        </Button>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;

  label {
    margin-right: 1rem;
  }

  select {
    height: 2rem;
  }
  select:focus {
    outline: 1px solid var(--mainDark);
  }
`;

UpdateMarkerStatusForm.propTypes = {
  updateMarkerStatus: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToPtops = state => ({
  // auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToPtops, { updateMarkerStatus })(
  UpdateMarkerStatusForm
);

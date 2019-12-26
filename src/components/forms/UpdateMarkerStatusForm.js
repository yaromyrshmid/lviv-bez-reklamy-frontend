import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    <div>
      <p>Змінити статус</p>
      <form onSubmit={onSubmit}>
        <select onChange={onChange}>
          <option value="">--Оберіть новий статус--</option>
          {statuses.map(stat => (
            <option value={stat.value} key={stat.value}>
              {stat.ukr}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={newStatus === currentStatus || newStatus === ""}
        >
          Змінити
        </button>
      </form>
    </div>
  );
};

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

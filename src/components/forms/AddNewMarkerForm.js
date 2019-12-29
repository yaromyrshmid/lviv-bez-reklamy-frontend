import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextFieldGroup from "./fields/TextFieldGroup";
import { postMarker } from "../../redux/actions/markerActions";
import pointInPoligon from "../../utils/pointInPoligon";

const AddNewMarkerForm = ({ location, postMarker, errors }) => {
  const [comment, setcomment] = useState("");
  const [checkMarkerInCity, setcheckMarkerInCity] = useState(true);
  const [image, setimage] = useState({ file: null, url: null });
  const [submitDisabled, setsubmitDisabled] = useState(false);

  useEffect(() => {
    if (pointInPoligon([location.lng, location.lat])) {
      setcheckMarkerInCity(true);
    } else {
      setcheckMarkerInCity(false);
    }
  }, [location.lng, location.lat]);

  useEffect(() => {
    setsubmitDisabled(false);
  }, [errors]);

  const onChange = e => {
    setcomment(e.target.value);
  };

  const hangleFileUpload = e => {
    let adress = URL.createObjectURL(e.target.files[0]);
    setimage({
      file: e.target.files[0],
      url: adress
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("location", JSON.stringify(location));
    formData.append("comment", comment);
    formData.append("image", image.file);
    postMarker(formData);
    setsubmitDisabled(true);
  };

  return (
    <div>
      <h4>Додати позначку незаконної реклами</h4>
      <p>
        Розташування: широта:{location.lat}, довгота:{location.lng}
      </p>

      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="image"
          id="image"
          onChange={hangleFileUpload}
        />
        {image.url && (
          <img src={image.url} alt="uploaded" style={{ width: "100%" }} />
        )}
        <TextFieldGroup
          name="comment"
          placeholder="Коментар"
          value={comment}
          error={errors.comment}
          onChange={onChange}
          type="text"
        />
        {!checkMarkerInCity && <span>Точка за межами міста</span>}
        <button
          type="submit"
          disabled={!checkMarkerInCity || !image.file || submitDisabled}
        >
          Додати
        </button>
      </form>
    </div>
  );
};

AddNewMarkerForm.propTypes = {
  postMarker: PropTypes.func.isRequired
  // auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};

const mapStateToPtops = state => ({
  // auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToPtops, { postMarker })(AddNewMarkerForm);

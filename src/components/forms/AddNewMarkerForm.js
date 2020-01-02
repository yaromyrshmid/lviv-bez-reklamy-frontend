import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { Button } from "../ui";
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
    <AddNewMarkerWrapper>
      <h5>Додати позначку незаконної реклами</h5>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={hangleFileUpload}
          />
          <span>Завантажити зображення</span>
        </label>
        {image.url && <img src={image.url} alt="uploaded" />}
        <TextFieldGroup
          name="comment"
          placeholder="Коментар"
          value={comment}
          error={errors.comment}
          onChange={onChange}
          type="text"
        />
        {!checkMarkerInCity && <span>Точка за межами міста</span>}
        <Button
          type="submit"
          disabled={!checkMarkerInCity || !image.file || submitDisabled}
        >
          <span> Додати</span>
        </Button>
      </form>
    </AddNewMarkerWrapper>
  );
};

const AddNewMarkerWrapper = styled.div`
  padding: 1rem;

  input {
    margin-top: 1rem;
  }

  label {
    margin-top: 0.5rem;
  }

  input[type="file"] {
    display: none;
  }

  label span {
    padding: 0.5rem 1rem;
    background-color: var(--main);
    border: 1px solid var(--main);
    color: var(--mainWhite);
  }

  .fileinput:hover,
  .fileinput:active,
  .fileinput:visited,
  .fileinput:focus {
    text-decoration: none;
    outline: none;
  }

  img {
    margin-top: 1rem;
    max-width: 100%;
    max-height: 240px;
  }
`;

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

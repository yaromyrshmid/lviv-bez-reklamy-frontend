import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  );
};

const Input = styled.input`
  padding-left: 0.5rem;

  &:focus {
    outline: 1px solid var(--mainDark);
  }
`;

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;

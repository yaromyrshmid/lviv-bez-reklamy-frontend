import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { Button, ErrorsGeneral, ErrorsSpecific } from "../ui";
import TextFieldGroup from "./fields/TextFieldGroup";
import { setNewPassword } from "../../redux/actions/authActions";

const SetNewPasswordForm = props => {
  const [form, setForm] = useState({
    password: "",
    password2: ""
  });

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.setNewPassword(
      form,
      props.match.params.passwordResetToken,
      props.callback
    );
  };

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <TextFieldGroup
          type="password"
          name="password"
          placeholder="Новий пароль"
          value={form.password}
          error={props.errors.password}
          onChange={onChange}
        />
        <TextFieldGroup
          type="password"
          name="password2"
          placeholder="Повторіть пароль"
          value={form.password2}
          error={props.errors.password2}
          onChange={onChange}
        />
        <Button type="submit" width="10rem">
          <span>Змінити пароль</span>
        </Button>
        <ErrorsGeneral />
        <ErrorsSpecific errors={[props.errors.user]} />
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  margin: auto;
  margin-top: 1rem;

  form {
    margin: auto;
  }
`;

SetNewPasswordForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { setNewPassword })(
  withRouter(SetNewPasswordForm)
);

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { Button, ErrorsGeneral, ErrorsSpecific } from "../../ui";
import TextFieldGroup from "../fields/TextFieldGroup";
import { changePassword } from "../../../redux/actions/profileActions";

const ChangePasswordForm = props => {
  const [form, setForm] = useState({
    password: "",
    newpassword: "",
    newpassword2: ""
  });

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.changePassword(form, props.callback);
  };

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <TextFieldGroup
          type="password"
          name="password"
          placeholder="Старий пароль"
          value={form.password}
          error={props.errors.password}
          onChange={onChange}
        />
        <TextFieldGroup
          type="password"
          name="newpassword"
          placeholder="Новий пароль"
          value={form.newpassword}
          error={props.errors.newpassword}
          onChange={onChange}
        />
        <TextFieldGroup
          type="password"
          name="newpassword2"
          placeholder="Повторіть новий пароль"
          value={form.newpassword2}
          error={props.errors.newpassword2}
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

ChangePasswordForm.propTypes = {
  changePassword: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { changePassword })(
  withRouter(ChangePasswordForm)
);

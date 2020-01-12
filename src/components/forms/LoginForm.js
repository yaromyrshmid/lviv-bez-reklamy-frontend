import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { Button, ErrorsGeneral } from "../ui";
import TextFieldGroup from "./fields/TextFieldGroup";
import { loginUser } from "../../redux/actions/authActions";

const Login = props => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.loginUser(form);
  };

  return (
    <LoginFormWrapper>
      <form onSubmit={onSubmit}>
        <TextFieldGroup
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          error={props.errors.email}
          onChange={onChange}
        />
        <TextFieldGroup
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          error={props.errors.password}
          onChange={onChange}
        />
        <Button type="submit">
          <span>Вхід</span>
        </Button>
        <ErrorsGeneral />
      </form>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.div`
  margin: auto;
  margin-top: 1rem;

  form {
    margin: auto;
  }
`;

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);

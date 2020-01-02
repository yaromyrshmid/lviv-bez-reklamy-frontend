import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { Button } from "../ui";
import TextFieldGroup from "./fields/TextFieldGroup";
import { registerUser } from "../../redux/actions/authActions";

const Registration = props => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.registerUser(form, props.history);
  };

  return (
    <RegisterFormWrapper>
      <form onSubmit={onSubmit}>
        <TextFieldGroup
          name="name"
          placeholder="Ім'я"
          value={form.name}
          error={props.errors.name}
          onChange={onChange}
        />
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
        <TextFieldGroup
          type="password"
          name="password2"
          placeholder="Повторіть пароль"
          value={form.password2}
          error={props.errors.password2}
          onChange={onChange}
        />
        <Button type="submit" width="10rem">
          <span>Зареєструватись</span>
        </Button>
      </form>
    </RegisterFormWrapper>
  );
};

const RegisterFormWrapper = styled.div`
  margin: auto;
  margin-top: 1rem;

  form {
    margin: auto;
  }
`;

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Registration);

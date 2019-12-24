import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TextFieldGroup from "./fields/TextFieldGroup";
import { registerUser } from "../../redux/actions/authActions";

const Registration = props => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    }
  }, [props.auth, props.history]);

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.registerUser(form, props.history);
  };

  return (
    <>
      <h1 className="display-4 text-center">Реєстрація</h1>
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
        <button type="submit" className="btn btn-info btn-block mt-4">
          Зареєструватись
        </button>
      </form>
    </>
  );
};

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(Registration)
);

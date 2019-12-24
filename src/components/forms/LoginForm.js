import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row } from "react-bootstrap";

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
    <Row>
      <Col xs={12} md={8} className=" m-auto">
        <form onSubmit={onSubmit}>
          <TextFieldGroup
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            error={props.errors.email}
            onChange={onChange}
          />
          <TextFieldGroup
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            error={props.errors.password}
            onChange={onChange}
          />
          <input type="submit" className="btn btn-info btn-block mt-4" />
        </form>
      </Col>
    </Row>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToPtops = state => ({
  errors: state.errors
});

export default connect(mapStateToPtops, { loginUser })(Login);

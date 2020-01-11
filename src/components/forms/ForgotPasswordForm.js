import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { forgotPassword } from "../../redux/actions/authActions";
import TextFieldGroup from "./fields/TextFieldGroup";
import { Button } from "../ui";

const ForgotPasswordForm = props => {
  const [email, setemail] = useState("");

  const onChange = e => {
    setemail(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.forgotPassword(email, props.callback);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextFieldGroup
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        error={props.errors.email}
        onChange={onChange}
      />
      <Button type="submit" disabled={email.length < 5}>
        <span>Відправити</span>
      </Button>
    </form>
  );
};

const mapStateToPtops = state => ({
  errors: state.errors
});

export default connect(mapStateToPtops, { forgotPassword })(
  withRouter(ForgotPasswordForm)
);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import TextFieldGroup from "../fields/TextFieldGroup";
import { Button, ErrorsGeneral, ErrorsSpecific } from "../../ui";

const ChangeEmail = props => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    setForm({ ...form, email: props.email });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // props.loginUser(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextFieldGroup
        name="email"
        type="email"
        placeholder="Новий Email"
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
      <Controls>
        <Button
          type="submit"
          disabled={form.email.length < 5 || form.password.length < 5}
        >
          <span>Зберегти</span>
        </Button>
        <Button onClick={props.cancel}>
          <span>Відміна</span>
        </Button>
      </Controls>
      <ErrorsGeneral />
      <ErrorsSpecific />
    </form>
  );
};

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 210px;
`;

const mapStateToProps = state => ({
  errors: state.errors,
  email: state.profile.profile.email
});

export default connect(mapStateToProps, {})(ChangeEmail);

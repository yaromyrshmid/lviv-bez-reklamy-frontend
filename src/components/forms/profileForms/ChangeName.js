import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import TextFieldGroup from "../fields/TextFieldGroup";
import { Button, ErrorsGeneral } from "../../ui";
import { changeName } from "../../../redux/actions/profileActions";

const ChangeName = props => {
  const [name, setname] = useState("");

  useEffect(() => {
    setname(props.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = e => {
    setname(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.changeName(name);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextFieldGroup
        name="name"
        placeholder="Нове ім'я"
        value={name}
        error={props.errors.name}
        onChange={onChange}
      />
      <Controls>
        <Button type="submit" disabled={name.length < 4}>
          <span>Зберегти</span>
        </Button>
        <Button onClick={props.cancel}>
          <span>Відміна</span>
        </Button>
      </Controls>
      <ErrorsGeneral />
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
  name: state.auth.user.name
});

export default connect(mapStateToProps, { changeName })(ChangeName);

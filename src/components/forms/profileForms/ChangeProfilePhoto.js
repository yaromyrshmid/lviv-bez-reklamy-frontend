import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import FilePondImage from "../fields/FilePondImage";
import { Button } from "../../ui";
import { setProfilePhoto } from "../../../redux/actions/profileActions";

const ChangeProfilePhoto = props => {
  const [image, setimage] = useState(null);

  const handleSubmit = () => {
    props.setProfilePhoto(image);
  };

  return (
    <div>
      <FilePondImage resizeWidth={200} setimages={setimage} />
      <Controls>
        <Button onClick={handleSubmit} disabled={!image}>
          <span>Зберегти</span>
        </Button>
        <Button onClick={props.cancel}>
          <span>Відміна</span>
        </Button>
      </Controls>
    </div>
  );
};

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const mapStateToPtops = state => ({
  errors: state.errors
});

export default connect(mapStateToPtops, { setProfilePhoto })(
  ChangeProfilePhoto
);

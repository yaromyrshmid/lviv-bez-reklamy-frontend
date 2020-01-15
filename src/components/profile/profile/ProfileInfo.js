import React, { useState } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

import ChangeName from "../../forms/profileForms/ChangeName";
// import ChangeEmail from "../../forms/profileForms/ChangeEmail";

const ProfileInfo = ({ name, email }) => {
  const [editing, setediting] = useState(false);

  const cancel = () => {
    setediting(false);
  };

  return (
    <InfoWrapper md={9}>
      {!editing && (
        <>
          <div>
            <h5>
              Ім'я: <span className="text-mainDark"> {name} </span>
            </h5>{" "}
            <span className="text-lighter" onClick={() => setediting("name")}>
              {" "}
              &nbsp;(змінити)
            </span>
          </div>
          <div>
            <h5>
              Email: <span className="text-mainDark"> {email}</span>
            </h5>{" "}
            {/* <span className="text-lighter" onClick={() => setediting("email")}>
              {" "}
              &nbsp;(змінити)
            </span> */}
          </div>
        </>
      )}
      {editing === "name" && <ChangeName cancel={cancel} />}
      {/* {editing === "email" && <ChangeEmail cancel={cancel} />} */}
    </InfoWrapper>
  );
};

const InfoWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 {
    display: inline-block;
  }

  span {
    display: inline-block;
  }
`;

export default ProfileInfo;

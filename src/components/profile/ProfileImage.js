import React, { useState } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

import { Button } from "../ui";
import photoplaceholder from "../../assets/userphotoplaceholder.png";
import ChangeProfilePhoto from "../forms/profileForms/ChangeProfilePhoto";

const ProfileImage = ({ photo }) => {
  const [showChangePhoto, setshowChangePhoto] = useState(false);

  return (
    <ImageWrapper md={3}>
      {!showChangePhoto ? (
        <>
          {photo ? (
            <img src={photo} alt="user" />
          ) : (
            <div
              onClick={() => {
                setshowChangePhoto(true);
              }}
            >
              <img src={photoplaceholder} alt="placeholder" />
              <h6 className="text-mainDark">Завантажити фото</h6>
            </div>
          )}
          <Button
            width="100%"
            onClick={() => {
              setshowChangePhoto(true);
            }}
          >
            <span>Змінити фото</span>
          </Button>
        </>
      ) : (
        <ChangeProfilePhoto
          cancel={() => {
            setshowChangePhoto(false);
          }}
        />
      )}
    </ImageWrapper>
  );
};

const ImageWrapper = styled(Col)`
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;

  img {
    margin: auto;
    max-width: 100%;
    max-height: 200px;
  }

  h6 {
    position: absolute;
    top: 40%;
    left: 20%;
  }
`;

export default ProfileImage;

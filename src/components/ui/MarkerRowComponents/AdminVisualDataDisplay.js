import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AddCommentForm from "../../forms/AddCommentForm";
import { Button, Spinner } from "../";
import HistoryDisplay from "./HistoryDisplay";

const AdminVisualDataDisplay = ({
  photo,
  location,
  id,
  comments,
  postComment,
  statusChange
}) => {
  const [display, setdisplay] = useState("photo");
  const [loading, setloading] = useState(true);

  return (
    <VisualDataDisplayWrapper>
      <ControlPanel>
        <Button
          width="100%"
          margin="1rem 0"
          onClick={() => setdisplay("photo")}
        >
          <span>Фото</span>
        </Button>
        <Button width="100%" margin="1rem 0" onClick={() => setdisplay("map")}>
          <span>Карта</span>
        </Button>
        <Button
          width="100%"
          margin="1rem 0"
          onClick={() => setdisplay("comments")}
        >
          <span>Коментарі</span>
        </Button>
        <Button
          width="100%"
          margin="1rem 0"
          onClick={() => setdisplay("history")}
        >
          <span>Історія</span>
        </Button>
      </ControlPanel>
      <DisplayArea>
        {display === "photo" && (
          <ImageContainer>
            <img src={"http://localhost:5000" + photo} alt="ad on the street" />
          </ImageContainer>
        )}
        {display === "map" && (
          <MapContainer>
            <Link to={`/map/${JSON.stringify(location)}`} target="_blank">
              <MapOverlay>
                <span>
                  Тицьніть тут, щоб відкрити на великій карті з усіма маркерами
                  {" (у нові вкладці)"}
                </span>
              </MapOverlay>
            </Link>
            {loading && <Spinner />}
            <iframe
              title={id}
              id="gmap_canvas"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?q=${location.lat}, ${location.lng}&z=15&output=embed&z=18`}
              onLoad={() => {
                setloading(false);
              }}
            />
          </MapContainer>
        )}
        {display === "comments" && (
          <CommentsContainer>
            {comments.map(({ comment, author, date }, index) => (
              <CommentWrapper key={index}>
                <p className="date">{new Date(date).toLocaleString("uk-UA")}</p>
                <p>
                  <span className="name">{author.name}: </span>
                  {comment}
                </p>
              </CommentWrapper>
            ))}
            <AddCommentForm postComment={postComment} markerId={id} />
          </CommentsContainer>
        )}
        {display === "history" && (
          <HistoryDisplay statusChange={statusChange} />
        )}
      </DisplayArea>
    </VisualDataDisplayWrapper>
  );
};

const VisualDataDisplayWrapper = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ControlPanel = styled.div`
  height: 100%;
  width: calc(100% - 600px);
  background-color: var(--mainDark);
`;

const DisplayArea = styled.div`
  width: 600px;
  background-color: var(--mainDark);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  img {
    width: 100%;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MapOverlay = styled.div`
  position: absolute;
  z-index: 100;
  top: 10px;
  left: 10px;
  width: 305px;
  height: 96px;
  background-color: var(--lightest);
  box-shadow: 9px 7px 5px -2px rgba(0, 0, 0, 0.75);
  color: var(--main);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CommentsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--lighter);
  padding: 1rem;
  overflow-y: scroll;
`;

const CommentWrapper = styled.div`
  color: var(--mainWhite);

  .date {
    color: var(--main);
    margin: 0;
  }

  .name {
    color: var(--mainDark);
  }
`;

export default AdminVisualDataDisplay;

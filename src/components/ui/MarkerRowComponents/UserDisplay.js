import React from "react";
import styled from "styled-components";
import { Button } from "../";

const UserDisplay = ({ user, banUser }) => {
  return (
    <UserDisplayWrapper>
      {user ? (
        <>
          <h5>{user.name}</h5>
          <ManageUserContainer>
            <span className="user-data">
              {user.email}
              <br />
              Роль: {user.role} <br />
              ID: {user._id}
            </span>
            <div>
              <Button
                danger
                onClick={() => banUser(user._id)}
                disabled={user.role === "banned" || user.role === "admin"}
              >
                <span>Забанити</span>
              </Button>
            </div>
          </ManageUserContainer>
        </>
      ) : (
        <h5>Користувача не існує</h5>
      )}
    </UserDisplayWrapper>
  );
};

const UserDisplayWrapper = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
`;

const ManageUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .user-data {
    color: var(--lighter);
  }
`;

export default UserDisplay;

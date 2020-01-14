import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import { Spinner, ErrorsSpecific, ErrorsGeneral } from "../../ui";
import { getUserProfile } from "../../../redux/actions/profileActions";

const ProfilePreview = props => {
  useEffect(() => {
    props.getUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Профіль</h1>
      {props.loading ? (
        <Spinner />
      ) : (
        <Wrapper>
          {props.profile ? (
            <>
              <ProfileImage photo={props.profile.photo} />
              <ProfileInfo email={props.profile.email} name={props.user.name} />
            </>
          ) : (
            <Col>
              <ErrorsGeneral />
              <ErrorsSpecific errors={[props.errors.profile]} />
            </Col>
          )}
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled(Row)`
  margin-top: 1rem;
`;

const mapStateToProps = state => ({
  profile: state.profile.profile,
  loading: state.profile.loading,
  user: state.auth.user,
  errors: state.errors
});

export default connect(mapStateToProps, { getUserProfile })(ProfilePreview);

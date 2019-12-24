import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { facebookLogin } from "../../redux/actions/authActions";

const LoginFacebook = props => {
  const responseFacebook = response => {
    console.log(response);
    props.facebookLogin(response.signedRequest);
  };

  const failFacebook = response => {
    console.log(response);
  };

  return (
    <Row>
      <Col xs={12} md={8} className=" m-auto">
        <FacebookLogin
          appId="575658166605722"
          fields="name,email,picture"
          onFailure={failFacebook}
          callback={responseFacebook}
          // responseType="token"
        />
      </Col>
    </Row>
  );
};

export default connect(null, { facebookLogin })(LoginFacebook);

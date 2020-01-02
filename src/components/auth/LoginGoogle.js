import React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { googleLogin } from "../../redux/actions/authActions";

const LoginGoogle = props => {
  const responseGoogle = response => {
    props.googleLogin(response.Zi.id_token);
  };

  const failGoogle = response => {
    console.log(response);
  };

  return (
    <Row>
      <Col xs={12} md={8} className=" m-auto">
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}
          buttonText="Вхід за допомогою Google"
          onSuccess={responseGoogle}
          onFailure={failGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Col>
    </Row>
  );
};

export default connect(null, { googleLogin })(LoginGoogle);

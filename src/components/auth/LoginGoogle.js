import React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import styled from "styled-components";

import { googleLogin } from "../../redux/actions/authActions";

const LoginGoogle = props => {
  const responseGoogle = response => {
    props.googleLogin(response.Zi.id_token);
  };

  const failGoogle = response => {
    console.log(response);
  };

  return (
    <GoogleLoginWrapper>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}
        buttonText="Вхід за допомогою Google"
        onSuccess={responseGoogle}
        onFailure={failGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </GoogleLoginWrapper>
  );
};

const GoogleLoginWrapper = styled.div`
  margin: auto;
  margin-top: 1rem;
`;

export default connect(null, { googleLogin })(LoginGoogle);

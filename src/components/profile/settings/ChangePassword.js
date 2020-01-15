import React, { useState } from "react";
import { connect } from "react-redux";

import ChangePasswordForm from "../../forms/profileForms/ChangePasswordForm";

const ChangePassword = props => {
  const [success, setsuccess] = useState(false);

  const callback = () => {
    setsuccess(true);
  };
  return (
    <div>
      <h3>Змінити пароль</h3>
      {!props.loginThirdParty ? (
        <>
          {!success ? (
            <ChangePasswordForm callback={callback} />
          ) : (
            <h5>Пароль змінено</h5>
          )}
        </>
      ) : (
        <h5>
          Для входу користувач використовує аутентифікацію третьої сторони,
          зміна паролю не можлива
        </h5>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.profile.loading,
  loginThirdParty: state.auth.user.loginThirdParty
});

export default connect(mapStateToProps)(ChangePassword);

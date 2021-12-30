import React, { useState } from "react";
import frame from "../../Assests/images/backgrounds/auth-frame.png";
import ContentBox from "../../Components/Common/ContentBox/ContentBox";
import Register from "../../Components/Custom/AuthForm/Register/Register";
import SingIn from "../../Components/Custom/AuthForm/SingIn/SingIn";

const Auth = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div className="auth">
      <div className="container">
        <div className="auth_container_left">
          <img src={frame} alt="" />
        </div>
        <div className="auth_container_right">
          <ContentBox>
            <div className="content_box_wrapper">
              <h3 className="box_title">
                {isSignInForm ? "Sign in Form" : "Register Form"}
              </h3>
              <div className="box_switch_container">
                <div className="box-switch_option_wrapper">
                  <button
                    className={`switch_button ${isSignInForm && "active"}`}
                    onClick={
                      isSignInForm ? null : () => setIsSignInForm(!isSignInForm)
                    }
                  >
                    Sign In
                  </button>
                  <button
                    className={`switch_button ${!isSignInForm && "active"}`}
                    onClick={
                      isSignInForm ? () => setIsSignInForm(!isSignInForm) : null
                    }
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="form_container_wrapper">
                { isSignInForm ? <SingIn /> : <Register/>}
              </div>
            </div>
          </ContentBox>
        </div>
      </div>
    </div>
  );
};

export default Auth;

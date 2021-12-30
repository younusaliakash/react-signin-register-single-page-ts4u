import React from 'react';
import googleIcon from "../../../Assests/images/logos/google-logo.png";

const GoogleSignIn = () => {
    return (
        <div className="google_signIn_btn_container">
            <div className="google_signIn_btn">
                <div className="google_icon">
                    <img src={googleIcon} alt="" />
                </div>
                <div className="google_login_btn">
                    Sign in with google
                </div>
            </div>
        </div>
    );
};

export default GoogleSignIn;
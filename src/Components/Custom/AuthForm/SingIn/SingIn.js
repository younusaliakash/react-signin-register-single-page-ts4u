import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import GoogleSignIn from "../../../Common/GoogleSignIn/GoogleSignIn";
import InputField from "../../../Common/InputField/InputField";
import InputFieldWrapper from "../../../Common/InputFieldWrapper/InputFieldWrapper";
import InputLabel from "../../../Common/InputLabel/InputLabel";
import SubmitButton from "../../../Common/SubmitButton/SubmitButton";

const inputs = [
  {
    id: 3,
    label: "Email",
    type: "text",
    name: "email",
    placeholder: "Enter your email address",
    errorMessage: "It should be valid email",
    pattern: "kjdhgf",
    icon: <FaEnvelope className="input_icon" />,
  },

  {
    id: 5,
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 number, 1 letter , 1 special character!",
    pattern: "kjdhgf",
    icon: <FaLock className="input_icon" />,
  },
];

const SingIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  console.log(values);

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign_in_form_wrapper">
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <InputFieldWrapper key={index}>
            <InputLabel labelName={input.label} />
            <InputField
              icon={input.icon}
              inputType={input.type}
              inputName={input.name}
              placeholder={input.placeholder}
              inputValue={values[input.name]}
              handleOnChange={handleOnChange}
              errorMessage={input.errorMessage}
            />
          </InputFieldWrapper>
        ))}
        <div className="form_submit_btn">
          <SubmitButton buttonType="submit" buttonTitle="Sign In" />
        </div>
      </form>
      <GoogleSignIn />
      <div className="forgot_password">
        <p>Forgotten password?</p>
      </div>
    </div>
  );
};

export default SingIn;

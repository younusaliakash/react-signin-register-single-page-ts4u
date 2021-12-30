import React from "react";
import { FaEnvelope, FaLock, FaPhone, FaUser } from "react-icons/fa";
import GoogleSignIn from "../../../Common/GoogleSignIn/GoogleSignIn";
import InputArea from "../../../Common/InputArea/InputArea";
import InputField from "../../../Common/InputField/InputField";
import InputFieldWrapper from "../../../Common/InputFieldWrapper/InputFieldWrapper";
import InputLabel from "../../../Common/InputLabel/InputLabel";
import SubmitButton from "../../../Common/SubmitButton/SubmitButton";

const inputs = [
  {
    id: 1,
    label: "First Name",
    type: "text",
    name: "firstName",
    placeholder: "Enter your first name",
    icon: <FaUser className="input_icon" />,
  },
  {
    id: 2,
    label: "Last Name",
    type: "text",
    name: "lastName",
    placeholder: "Enter your last name",
    icon: <FaUser className="input_icon" />,
  },
  {
    id: 3,
    label: "Email",
    type: "text",
    name: "email",
    placeholder: "Enter your email address",
    icon: <FaEnvelope className="input_icon" />,
  },
  {
    id: 4,
    label: "Phone",
    type: "number",
    name: "phone",
    placeholder: "Enter your phone number",
    icon: <FaPhone className="input_icon" />,
  },
  {
    id: 5,
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your Password",
    icon: <FaLock className="input_icon" />,
  },
  {
    id: 6,
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    placeholder: "confirm password",
    icon: <FaLock className="input_icon" />,
  },
];

const Register = () => {
  const handleOnChange = (e) => {
    console.log({[e.target.name] : e.target.value});
  };


  
  return (
    <div className="register_form_wrapper">
      <form>
        {inputs.map((input, index) => (
          <InputFieldWrapper key={index}>
            <InputLabel labelName={input.label} />
            <InputArea>
              {input.icon}
              <InputField
                inputType={input.type}
                inputName={input.name}
                placeholder={input.placeholder}
                handleOnChange={handleOnChange}
              />
            </InputArea>
          </InputFieldWrapper>
        ))}
        {/* <InputFieldWrapper>
          <InputLabel labelName="First Name" />
          <InputArea>
            <FaUser className="input_icon"/>          
            <InputField inputType="text" inputName="firstName" placeholder="Enter your first name" handleOnChange={handleOnChange}/>
          </InputArea>
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputLabel labelName="Last Name" />
          <InputArea>
            <FaUser className="input_icon"/>          
            <InputField inputType="text" inputName="lastName" placeholder="Enter your last name" handleOnChange={handleOnChange}/>
          </InputArea>
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputLabel labelName="Email" />
          <InputArea>
            <FaEnvelope className="input_icon"/>          
            <InputField inputType="text" inputName="email" placeholder="Enter your email address" handleOnChange={handleOnChange}/>
          </InputArea>
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputLabel labelName="Phone" />
          <InputArea>
            <FaPhone className="input_icon"/>          
            <InputField inputType="number" inputName="phone" placeholder="Enter your phone number" handleOnChange={handleOnChange}/>
          </InputArea>
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputLabel labelName="Password" />
          <InputArea>
            <FaLock className="input_icon"/>          
            <InputField inputType="password" inputName="password" placeholder="Enter your Password" handleOnChange={handleOnChange}/>
          </InputArea>
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputLabel labelName="Confirm Password" />
          <InputArea>
            <FaLock className="input_icon"/>          
            <InputField inputType="password" inputName="confirmPassword" placeholder="Confirm Password" handleOnChange={handleOnChange}/>
          </InputArea>
        </InputFieldWrapper> */}
        <div className="form_submit_btn">
          <SubmitButton buttonType="submit" buttonTitle="Register" />
        </div>
      </form>
      <GoogleSignIn />
    </div>
  );
};

export default Register;

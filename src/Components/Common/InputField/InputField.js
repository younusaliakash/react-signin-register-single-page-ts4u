import React from "react";
import InputArea from "../InputArea/InputArea";

const InputField = ({
  inputType,
  inputName,
  placeholder,
  handleOnChange,
  errorMessage,
  inputValue,
  icon,
}) => {
  return (
    <div className="input_field">
      <InputArea>
        {icon && icon}
        <input
          type={inputType}
          name={inputName}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={inputValue}
          required
        />
      </InputArea>
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputField;

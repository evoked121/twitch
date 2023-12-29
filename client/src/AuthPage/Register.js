import React, { useState } from "react";
import { Logo } from "./Logo.js";
import { Input } from "../shared/components";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword,
  validatePasswordConf,
  passwordConfValidationMessage,
  validateUsername,
  usernameValidationMessage,
} from "./../shared/validators";
import { useRegister } from "../shared/hooks/useRegister.js";

export const Register = ({ switchAuthHandler }) => {
  const { isLoading, register } = useRegister();
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    confirmPassword: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((preState) => ({
      ...preState,
      [field]: {
        ...preState[field],
        value: value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "confirmPassword":
        isValid = validatePasswordConf(value, formState.password.value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      default:
        break;
    }
    setFormState((preState) => ({
      ...preState,
      [field]: {
        ...preState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    register(
      formState.email.value,
      formState.password.value,
      formState.username.value
    );
  };

  return (
    <div className="register-container">
      <Logo text="Register an account"></Logo>
      <form className="auth-form">
        <Input
          field="email"
          label="email"
          value={formState.email.value}
          validationMessage={emailValidationMessage}
          showErrorMessage={formState.email.showError}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
        ></Input>
        <Input
          field="username"
          label="username"
          value={formState.username.value}
          validationMessage={usernameValidationMessage}
          showErrorMessage={formState.username.showError}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
        ></Input>
        <Input
          field="password"
          label="password"
          value={formState.password.value}
          validationMessage={passwordValidationMessage}
          showErrorMessage={formState.password.showError}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
        ></Input>
        <Input
          field="confirmPassword"
          label="confirm password"
          value={formState.confirmPassword.value}
          validationMessage={passwordConfValidationMessage}
          showErrorMessage={formState.confirmPassword.showError}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
        ></Input>
        <button
          onClick={handleRegister}
          disabled={
            !formState.email.isValid ||
            !formState.password.isValid ||
            !formState.confirmPassword.isValid ||
            !formState.username.isValid ||
            isLoading
          }
        >
          Register
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Already have an account? log in!
      </span>
    </div>
  );
};

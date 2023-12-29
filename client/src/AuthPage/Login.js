import React, { useState } from "react";
import { Logo } from "./Logo.js";
import { Input } from "../shared/components";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword,
} from "./../shared/validators";
import { useLogin } from "../shared/hooks/useLogin.js";

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin();
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
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

  const handleLogin = (event) => {
    event.preventDefault();
    login(formState.email.value, formState.password.value);
  };

  return (
    <div className="login-container">
      <Logo text={"Log in to clone"} />
      <form className="auth-form">
        <Input
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        ></Input>
        <Input
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        ></Input>
        <button
          disabled={
            !formState.email.isValid || !formState.password.isValid || isLoading
          }
          onClick={handleLogin}
        >
          Log in
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Don't have an account? Sign up
      </span>
    </div>
  );
};

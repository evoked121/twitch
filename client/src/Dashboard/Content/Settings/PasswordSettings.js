import React, { useState } from "react";
import {
  passwordValidationMessage,
  validatePassword,
} from "../../../shared/validators";
import { Input } from "../../../shared/components";
import { useChangePassword } from "../../../shared/hooks";

const inputs = [
  {
    field: "password",
    label: "current password",
    validationMessage: passwordValidationMessage,
    type: "text",
  },
  {
    field: "newPassword",
    label: "new password",
    validationMessage: passwordValidationMessage,
    type: "text",
  },
];

export const PasswordSettings = () => {
  const [formState, setFormState] = useState({
    password: {
      isValid: false,
      showError: false,
      value: "",
    },
    newPassword: {
      isValid: false,
      showError: false,
      value: "",
    },
  });

  const { changePassword } = useChangePassword();

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
    let isValid = validatePassword(value);

    setFormState((preState) => ({
      ...preState,
      [field]: {
        ...preState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const isSubmitButtonDisabled =
    !formState.password.isValid || !formState.newPassword.isValid;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    changePassword(formState.password.value, formState.newPassword.value);
  };

  return (
    <form className="settings-form">
      {inputs.map((input) => (
        <Input
          key={input.field}
          field={input.field}
          label={input.label}
          value={formState[input.field].value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState[input.field].showError}
          validationMessage={input.validationMessage}
          type={input.type}
          textarea={input.textarea}
        />
      ))}
      <button disabled={isSubmitButtonDisabled} onClick={handleFormSubmit}>
        Save Changes
      </button>
    </form>
  );
};

export const validatePassword = (password) => {
  const regex = /^\S{6,12}$/;
  return regex.test(password);
};

export const passwordValidationMessage = "Please enter a valid password";

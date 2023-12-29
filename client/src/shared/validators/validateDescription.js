export const validateDescription = (description) => {
  return description.length >= 5 && description.length <= 200;
};

export const descriptionValidationMessage =
  "Description should have between 5 and 200";

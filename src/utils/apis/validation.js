const validation = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "Username Is Required";
  } else if (!/\S+@\S+\.\S+/.test(values.username)) {
    errors.username = "Invalid Username";
  }

  if (!values.password) {
    errors.password = "Password Is Required";
  }
  return errors;
};

export const emailFormValidation = (values) => {
  let errors = {};
  if (!values.password) {
    errors.password = "Password Is Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password Is Required";
  }
  return errors;
};

export const changePasswordFormValidation = (values) => {
  let errors = {};
  if (!values.currPassword) {
    errors.currPassword = "Password Is Required";
  }
  if (!values.newPassword) {
    errors.newPassword = "New Password Is Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password Is Required";
  }
  return errors;
};

export default validation;

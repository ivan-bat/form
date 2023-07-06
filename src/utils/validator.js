import {
  checkError,
  isEmail,
  isPassword,
  isRepPassword,
  isPasswordNumber,
} from "./CheckError";

export const validator = (values, config) => {
  const errors = {};

  for (const name in values) {
    const validationRules = config[name];
    for (const rule in validationRules) {
      const { massage } = validationRules[rule];
      const hasError = !validate(rule, values[name]);

      if (hasError) {
        errors[name] = massage;
      }
    }
    if (name === "repPassword") {
      const password = values["password"];
      const repPassword = values["repPassword"];

      if (!isRepPassword(repPassword, password)) {
        errors[name] = "Пароли не совпадают";
      }
    }
  }
  function validate(ruleName, value) {
    switch (ruleName) {
      case "checkError":
        return checkError(value);
      case "isEmail":
        return isEmail(value);
      case "isPassword":
        return isPassword(value);
      case "isPasswordNumber":
        return isPasswordNumber(value);
      default:
        break;
    }
  }
  return errors;
};

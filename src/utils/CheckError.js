export const checkError = (value) => Boolean(value.trim());

export const isEmail = (value) =>
  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/g.test(
    value
  );

export const isPassword = (value) => /^(?=.*[A-Z])/g.test(value);
export const isPasswordNumber = (value) => /^(?=.*[0-9])/g.test(value);

export const isRepPassword = (value, password) => {
  return value === password;
};

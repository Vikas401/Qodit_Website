const emailFormat = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const minLength = (value, length) => {
  if (!value) return false;
  return value.length < length;
};

const maxLength = (value, length) => {
  if (!value) return false;
  return value.length > length;
};

const imageValidate = (value) => {
  const img = new Image();
  img.src = value;
  if (img.width == 0) return false;
  return true;
};

const validate = {
  emailFormat,
  minLength,
  maxLength,
  imageValidate,
};

export default validate;

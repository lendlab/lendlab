export const toErrorMap = (errors) => {
  const errorMap = {};

  errors.forEach(({ path, message }) => {
    errorMap[path] = message;
  });

  return errorMap;
};

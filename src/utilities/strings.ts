export const removeInvalidChars = (str: string) => {
  return str.replace(/\uFFFD/g, "");
};

export const $is_regex = (str: string) => {
  try {
    new RegExp(str);
    return true;
  } catch {
    return false;
  }
};

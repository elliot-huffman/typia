export const $httpHeaders_bigint = (value: string | undefined) =>
  value !== undefined ? toBigint(value) : undefined;

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
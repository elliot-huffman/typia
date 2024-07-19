import { IRandomGenerator } from "../IRandomGenerator";
import { $random_integer } from "./$random_integer";

export const $random_string: IRandomGenerator["string"] = (props) => {
  const length: number = $random_integer({
    type: "integer",
    minimum: props.minLength,
    maximum: props.maxLength,
  });
  return new Array(length)
    .fill(0)
    .map(() => ALPHABETS[random()])
    .join("");
};
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const random = () =>
  $random_integer({
    type: "integer",
    minimum: 0,
    maximum: ALPHABETS.length - 1,
  });

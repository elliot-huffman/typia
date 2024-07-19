import { IRandomGenerator } from "../IRandomGenerator";
import { $random_string } from "./$random_string";

export const $random_format_hostname: IRandomGenerator["hostname"] = () =>
  `${random(10)}.${random(3)}`;

const random = (length: number) =>
  $random_string({ type: "string", minLength: length, maxLength: length });

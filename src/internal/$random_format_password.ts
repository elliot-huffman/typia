import { IRandomGenerator } from "../IRandomGenerator";
import { $random_string } from "./$random_string";

export const $random_format_password: IRandomGenerator["password"] = () =>
  $random_string({
    type: "string",
    minLength: 4,
    maxLength: 16,
  });

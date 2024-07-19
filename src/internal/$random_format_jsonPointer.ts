import { IRandomGenerator } from "../IRandomGenerator";
import { $random_string } from "./$random_string";

export const $random_format_json_pointer: IRandomGenerator["jsonPointer"] =
  () => `/components/schemas/${random()}`;

const random = () =>
  $random_string({ type: "string", minLength: 10, maxLength: 10 });

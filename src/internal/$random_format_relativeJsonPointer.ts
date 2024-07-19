import { IRandomGenerator } from "../IRandomGenerator";
import { $random_string } from "./$random_string";

export const $random_format_relative_json_pointer: IRandomGenerator["relativeJsonPointer"] =
  () =>
    `${$random_string({
      type: "string",
      minLength: 3,
      maxLength: 10,
    })}#`;

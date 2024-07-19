import { IRandomGenerator } from "../IRandomGenerator";
import { $random_integer } from "./$random_integer";

export const $random_format_datetime: IRandomGenerator["datetime"] = (props) =>
  new Date(
    $random_integer({
      type: "integer",
      minimum: props.minimum ?? 0,
      maximum:
        (props.maximum ?? props.minimum === undefined)
          ? Date.now()
          : props.minimum + 365 * 24 * 60 * 60 * 1_000,
    }),
  ).toISOString();

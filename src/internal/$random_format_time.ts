import { IRandomGenerator } from "../IRandomGenerator";
import { $random_integer } from "./$random_integer";

export const $random_format_time: IRandomGenerator["time"] = () =>
  new Date(
    $random_integer({
      type: "integer",
      minimum: 0,
      maximum: DAY,
    }),
  )
    .toISOString()
    .substring(11, 23);
const DAY = 86_400_000;

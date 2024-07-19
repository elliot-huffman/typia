import { IRandomGenerator } from "../IRandomGenerator";
import { $random_integer } from "./$random_integer";

export const $random_format_ipv6: IRandomGenerator["ipv6"] = () =>
  new Array(8).fill(0).map(random).join(":");

const random = () =>
  $random_integer({
    type: "integer",
    minimum: 0,
    maximum: 65_535,
  }).toString(16);

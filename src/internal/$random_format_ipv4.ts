import { IRandomGenerator } from "../IRandomGenerator";
import { $random_integer } from "./$random_integer";

export const $random_ipv4: IRandomGenerator["ipv4"] = () =>
  new Array(4).fill(0).map(random).join(".");

const random = () =>
  $random_integer({
    type: "integer",
    minimum: 0,
    maximum: 255,
  });

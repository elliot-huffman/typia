import { $random_integer } from "./$random_integer";

export const $random_pick = <T>(array: T[]): T => array[random(array)]!;
const random = <T>(array: T[]) =>
  $random_integer({
    type: "integer",
    minimum: 0,
    maximum: array.length - 1,
  });

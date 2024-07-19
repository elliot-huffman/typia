import { IRandomGenerator } from "../IRandomGenerator";

export const $random_boolean: IRandomGenerator["boolean"] = () =>
  Math.random() < 0.5;

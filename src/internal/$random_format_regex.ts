import { IRandomGenerator } from "../IRandomGenerator";

export const $random_format_regex: IRandomGenerator["regex"] = () => FIXED;
const FIXED =
  "/^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/";

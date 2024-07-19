import { IRandomGenerator } from "../IRandomGenerator";
import { $random_format_url } from "./$random_format_url";

export const $random_format_uri: IRandomGenerator["uri"] = () =>
  $random_format_url();

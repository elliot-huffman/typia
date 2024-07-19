import { IRandomGenerator } from "../IRandomGenerator";
import { $random_format_hostname } from "./$random_format_hostname";

export const $random_format_idn_hostname: IRandomGenerator["idnHostname"] =
  () => $random_format_hostname();

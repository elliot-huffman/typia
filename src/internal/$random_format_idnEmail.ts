import { IRandomGenerator } from "../IRandomGenerator";
import { $random_format_email } from "./$random_format_email";

export const $random_format_idn_email: IRandomGenerator["idnEmail"] = () =>
  $random_format_email();

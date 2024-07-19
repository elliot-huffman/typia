import RandExp from "randexp";

import { IRandomGenerator } from "../IRandomGenerator";

export const $random_pattern: IRandomGenerator["pattern"] = (regex) => {
  const r: RandExp = new RandExp(regex);
  for (let i: number = 0; i < 10; ++i) {
    const str: string = r.gen();
    if (regex.test(str)) return str;
  }
  return r.gen();
};

import { IRandomGenerator } from "../IRandomGenerator";

export const $random_number: IRandomGenerator["number"] = (props) => {
  const min: number =
    props.minimum ?? (props.maximum === undefined ? 0 : props.maximum - 100);
  const max: number =
    props.maximum ?? (props.minimum === undefined ? 100 : props.minimum + 100);
  if (min > max)
    throw new Error("Minimum value is greater than maximum value.");

  const random = () => Math.random() * (max - min) + min;
  const out: () => number =
    props.multipleOf === undefined
      ? random
      : () => {
          const value: number = random();
          return value - (value % props.multipleOf!);
        };
  const excMin: boolean =
    props.minimum !== undefined && props.exclusiveMinimum === true;
  const excMax: boolean =
    props.maximum !== undefined && props.exclusiveMaximum === true;

  if (excMin === false && excMax === false) return out();
  else if (min === max)
    throw new Error("Minimum and maximum values are equal, but exclusive.");
  while (true) {
    const value: number = out();
    if (
      (excMin === true && value === min) ||
      (excMax === true && value === max)
    )
      continue;
    return value;
  }
};

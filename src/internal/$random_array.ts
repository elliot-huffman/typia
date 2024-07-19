import { IRandomGenerator } from "../IRandomGenerator";
import { $random_integer } from "./$random_integer";

export const $random_array: IRandomGenerator["array"] = (props) => {
  const count: number = $random_integer({
    type: "integer",
    minimum: props.minItems ?? 0,
    maximum: props.maxItems ?? (props.minItems ?? 0) + 5,
  });
  if (props.uniqueItems !== true)
    return new Array(count).fill(null).map((_, i) => props.element(i, count));
  const elements: Set<any> = new Set();
  while (elements.size !== count)
    elements.add(props.element(elements.size, count));
  return Array.from(elements);
};

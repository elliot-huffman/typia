import { IRandomGenerator } from "../IRandomGenerator";
import { $random_integer } from "./$random_integer";

export const $random_bigint: IRandomGenerator["bigint"] = (props) =>
  BigInt(
    $random_integer({
      type: "integer",
      minimum: props.minimum !== undefined ? Number(props.minimum) : undefined,
      maximum: props.maximum !== undefined ? Number(props.maximum) : undefined,
      exclusiveMinimum: props.exclusiveMinimum,
      exclusiveMaximum: props.exclusiveMaximum,
    }),
  );

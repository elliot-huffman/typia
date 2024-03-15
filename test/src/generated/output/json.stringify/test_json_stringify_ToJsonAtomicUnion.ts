import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
export const test_json_stringify_ToJsonAtomicUnion = _test_json_stringify(
  "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
  ((input: ToJsonAtomicUnion): string => {
    const $string = (typia.json.stringify as any).string;
    const $number = (typia.json.stringify as any).number;
    const $throws = (typia.json.stringify as any).throws;
    return `[${input
      .map((elem: any) =>
        null !== elem.toJSON()
          ? (() => {
              if ("string" === typeof elem.toJSON())
                return $string(elem.toJSON());
              if ("number" === typeof elem.toJSON())
                return $number(elem.toJSON());
              if ("boolean" === typeof elem.toJSON()) return elem.toJSON();
              $throws({
                expected: "(boolean | null | number | string)",
                value: elem.toJSON(),
              });
            })()
          : "null",
      )
      .join(",")}]`;
  })(input),
);
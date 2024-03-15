import typia from "typia";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
import { TypeGuardError } from "typia";
export const test_misc_assertClone_ArrayAtomicSimple = _test_misc_assertClone(
  TypeGuardError,
)("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Resolved<ArrayAtomicSimple> => {
    const assert = (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ArrayAtomicSimple => {
      const __is = (input: any): input is ArrayAtomicSimple => {
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          Array.isArray(input[0]) &&
          input[0].every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input[1]) &&
          input[1].every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          Array.isArray(input[2]) &&
          input[2].every((elem: any) => "string" === typeof elem)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ArrayAtomicSimple => {
          const $guard = (typia.misc.assertClone as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ArrayAtomicSimple",
                  value: input,
                },
                errorFactory,
              )) &&
              (input.length === 3 ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "[Array<boolean>, Array<number>, Array<string>]",
                    value: input,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input[0]) ||
                $guard(
                  true,
                  {
                    path: _path + "[0]",
                    expected: "Array<boolean>",
                    value: input[0],
                  },
                  errorFactory,
                )) &&
                input[0].every(
                  (elem: any, _index1: number) =>
                    "boolean" === typeof elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[0][" + _index1 + "]",
                        expected: "boolean",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  true,
                  {
                    path: _path + "[0]",
                    expected: "Array<boolean>",
                    value: input[0],
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input[1]) ||
                $guard(
                  true,
                  {
                    path: _path + "[1]",
                    expected: "Array<number>",
                    value: input[1],
                  },
                  errorFactory,
                )) &&
                input[1].every(
                  (elem: any, _index2: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1][" + _index2 + "]",
                        expected: "number",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  true,
                  {
                    path: _path + "[1]",
                    expected: "Array<number>",
                    value: input[1],
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input[2]) ||
                $guard(
                  true,
                  {
                    path: _path + "[2]",
                    expected: "Array<string>",
                    value: input[2],
                  },
                  errorFactory,
                )) &&
                input[2].every(
                  (elem: any, _index3: number) =>
                    "string" === typeof elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[2][" + _index3 + "]",
                        expected: "string",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  true,
                  {
                    path: _path + "[2]",
                    expected: "Array<string>",
                    value: input[2],
                  },
                  errorFactory,
                ))) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ArrayAtomicSimple",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    };
    const clone = (
      input: ArrayAtomicSimple,
    ): import("typia").Resolved<ArrayAtomicSimple> => {
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      const $cp1 = (input: any) => input.map((elem: any) => elem as any);
      const $cp2 = (input: any) => input.map((elem: any) => elem as any);
      return Array.isArray(input) &&
        input.length === 3 &&
        Array.isArray(input[0]) &&
        input[0].every((elem: any) => "boolean" === typeof elem) &&
        Array.isArray(input[1]) &&
        input[1].every((elem: any) => "number" === typeof elem) &&
        Array.isArray(input[2]) &&
        input[2].every((elem: any) => "string" === typeof elem)
        ? ([
            Array.isArray(input[0]) ? $cp0(input[0]) : (input[0] as any),
            Array.isArray(input[1]) ? $cp1(input[1]) : (input[1] as any),
            Array.isArray(input[2]) ? $cp2(input[2]) : (input[2] as any),
          ] as any)
        : (input as any);
    };
    assert(input, errorFactory);
    const output = clone(input);
    return output;
  })(input),
);
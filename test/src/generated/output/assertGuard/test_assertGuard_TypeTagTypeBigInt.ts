import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";
import { TypeGuardError } from "typia";
export const test_assertGuard_TypeTagTypeBigInt = _test_assertGuard(
  TypeGuardError,
)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is TypeTagTypeBigInt => {
    const __is = (input: any): input is TypeTagTypeBigInt => {
      return (
        "object" === typeof input &&
        null !== input &&
        "bigint" === typeof (input as any).in64 &&
        "bigint" === typeof (input as any).uint64 &&
        BigInt(0) <= (input as any).uint64
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagTypeBigInt => {
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("bigint" === typeof input.in64 ||
            $guard(
              _exceptionable,
              {
                path: _path + ".in64",
                expected: "bigint",
                value: input.in64,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.uint64 &&
            (BigInt(0) <= input.uint64 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".uint64",
                  expected: 'bigint & Type<"uint64">',
                  value: input.uint64,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".uint64",
                expected: '(bigint & Type<"uint64">)',
                value: input.uint64,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "TypeTagTypeBigInt",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "TypeTagTypeBigInt",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input),
);
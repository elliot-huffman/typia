import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArrayRepeatedRequired = _test_assertGuard(
  TypeGuardError,
)("ArrayRepeatedRequired")<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
  typia.createAssertGuard<ArrayRepeatedRequired>(),
);
import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectSimple = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectSimple")<ObjectSimple>(ObjectSimple)(
  typia.misc.createAssertPrune<ObjectSimple>(),
);
import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_createAssert_ClassPropertyAssignment = _test_assert(
  TypeGuardError,
)("ClassPropertyAssignment")<ClassPropertyAssignment>(ClassPropertyAssignment)(
  typia.createAssert<ClassPropertyAssignment>(),
);
import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_assert_TupleHierarchical = _test_assert(TypeGuardError)(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.assert<TupleHierarchical>(input),
);
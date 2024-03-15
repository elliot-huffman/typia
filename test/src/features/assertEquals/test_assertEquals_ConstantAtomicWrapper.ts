import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_assertEquals_ConstantAtomicWrapper = _test_assertEquals(
  TypeGuardError,
)("ConstantAtomicWrapper")<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
  (input) => typia.assertEquals<ConstantAtomicWrapper>(input),
);
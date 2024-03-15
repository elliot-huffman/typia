import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_CommentTagTypeBigInt =
  _test_misc_assertPrune(TypeGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
    typia.misc.assertPrune<CommentTagTypeBigInt>(input),
  );
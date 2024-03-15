import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_DynamicTree = _test_json_assertParse(
  TypeGuardError,
)("DynamicTree")<DynamicTree>(DynamicTree)(
  typia.json.createAssertParse<DynamicTree>(),
);
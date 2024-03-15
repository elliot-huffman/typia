import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_AtomicUnion =
  _test_json_assertStringify(CustomGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )(
    typia.json.createAssertStringify<AtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
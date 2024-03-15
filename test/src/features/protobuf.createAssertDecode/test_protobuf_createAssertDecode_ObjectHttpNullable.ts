import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectHttpNullable =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)({
    decode: typia.protobuf.createAssertDecode<ObjectHttpNullable>(),
    encode: typia.protobuf.createEncode<ObjectHttpNullable>(),
  });
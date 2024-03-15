import typia from "typia";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ArrayAtomicAlias =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayAtomicAlias",
  })(typia.json.application<[ArrayAtomicAlias], "swagger", true>());
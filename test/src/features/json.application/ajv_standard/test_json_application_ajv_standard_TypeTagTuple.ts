import typia from "typia";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_TypeTagTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagTuple",
  })(typia.json.application<[TypeTagTuple], "ajv", false>());
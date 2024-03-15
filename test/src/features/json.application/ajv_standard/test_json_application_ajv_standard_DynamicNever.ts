import typia from "typia";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_DynamicNever =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicNever",
  })(typia.json.application<[DynamicNever], "ajv", false>());
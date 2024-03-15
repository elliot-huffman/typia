import typia from "typia";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ConstantConstEnumeration =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ConstantConstEnumeration",
  })(typia.json.application<[ConstantConstEnumeration], "swagger", true>());
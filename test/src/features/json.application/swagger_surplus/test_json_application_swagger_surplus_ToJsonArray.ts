import typia from "typia";
import { ToJsonArray } from "../../../structures/ToJsonArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ToJsonArray =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ToJsonArray",
  })(typia.json.application<[ToJsonArray], "swagger", true>());
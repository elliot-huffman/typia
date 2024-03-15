import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ObjectJsonTag =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectJsonTag",
  })(typia.json.application<[ObjectJsonTag], "swagger", true>());
import typia from "typia";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_AtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "AtomicSimple",
  })(typia.json.application<[AtomicSimple], "ajv", false>());
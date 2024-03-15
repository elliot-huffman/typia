import typia from "typia";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_TupleRestAtomic =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TupleRestAtomic",
  })(typia.json.application<[TupleRestAtomic], "ajv", false>());
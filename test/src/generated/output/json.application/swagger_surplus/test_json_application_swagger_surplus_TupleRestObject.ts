import typia from "typia";
import { TupleRestObject } from "../../../../structures/TupleRestObject";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_TupleRestObject =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TupleRestObject",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TupleRestObject",
      },
    ],
    components: {
      schemas: {
        TupleRestObject: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "boolean",
              },
              {
                type: "number",
              },
              {
                $ref: "#/components/schemas/TupleRestObject.IObject",
              },
            ],
          },
          minItems: 2,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                type: "boolean",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "number",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/TupleRestObject.IObject",
                "x-typia-rest": true,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 2,
          },
        },
        "TupleRestObject.IObject": {
          type: "object",
          properties: {
            value: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
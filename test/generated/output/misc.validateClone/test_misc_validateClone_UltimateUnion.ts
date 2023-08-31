import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_misc_validateClone_UltimateUnion = _test_misc_validateClone(
    "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input) =>
    ((input: any): typia.IValidation<typia.Resolved<UltimateUnion>> => {
        const validate = (input: any): typia.IValidation<UltimateUnion> => {
            const errors = [] as any[];
            const __is = (input: any): input is UltimateUnion => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.schemas) &&
                    input.schemas.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            false === Array.isArray(elem) &&
                            $iu0(elem),
                    ) &&
                    "object" === typeof input.components &&
                    null !== input.components &&
                    false === Array.isArray(input.components) &&
                    $io16(input.components) &&
                    ("swagger" === input.purpose || "ajv" === input.purpose);
                const $io1 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) => "boolean" === typeof elem,
                    ) &&
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"]) &&
                    "boolean" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    (undefined === input.text ||
                        (Array.isArray(input.text) &&
                            input.text.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            )));
                const $io3 = (input: any): boolean =>
                    "string" === typeof input.text &&
                    "string" === typeof input.kind;
                const $io4 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"]))) &&
                    "number" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io5 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"]) &&
                    "string" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io6 = (input: any): boolean =>
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"]) &&
                    "boolean" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io7 = (input: any): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Math.floor(input.minimum) === input.minimum &&
                            -2147483648 <= input.minimum &&
                            input.minimum <= 2147483647)) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Math.floor(input.maximum) === input.maximum &&
                            -2147483648 <= input.maximum &&
                            input.maximum <= 2147483647)) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Math.floor(input.multipleOf) === input.multipleOf &&
                            -2147483648 <= input.multipleOf &&
                            input.multipleOf <= 2147483647)) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"]))) &&
                    "integer" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io8 = (input: any): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum))) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum))) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Number.isFinite(input.multipleOf))) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"]))) &&
                    "number" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io9 = (input: any): boolean =>
                    (undefined === input.minLength ||
                        ("number" === typeof input.minLength &&
                            Math.floor(input.minLength) === input.minLength &&
                            0 <= input.minLength &&
                            input.minLength <= 4294967295)) &&
                    (undefined === input.maxLength ||
                        ("number" === typeof input.maxLength &&
                            Math.floor(input.maxLength) === input.maxLength &&
                            0 <= input.maxLength &&
                            input.maxLength <= 4294967295)) &&
                    (undefined === input.pattern ||
                        "string" === typeof input.pattern) &&
                    (undefined === input.format ||
                        "string" === typeof input.format) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"]) &&
                    "string" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io10 = (input: any): boolean =>
                    "object" === typeof input.items &&
                    null !== input.items &&
                    false === Array.isArray(input.items) &&
                    $iu0(input.items) &&
                    (undefined === input.minItems ||
                        ("number" === typeof input.minItems &&
                            Math.floor(input.minItems) === input.minItems &&
                            0 <= input.minItems &&
                            input.minItems <= 4294967295)) &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295)) &&
                    (undefined === input["x-typia-tuple"] ||
                        ("object" === typeof input["x-typia-tuple"] &&
                            null !== input["x-typia-tuple"] &&
                            $io11(input["x-typia-tuple"]))) &&
                    "array" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io11 = (input: any): boolean =>
                    Array.isArray(input.items) &&
                    input.items.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            false === Array.isArray(elem) &&
                            $iu0(elem),
                    ) &&
                    "number" === typeof input.minItems &&
                    Math.floor(input.minItems) === input.minItems &&
                    0 <= input.minItems &&
                    input.minItems <= 4294967295 &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295)) &&
                    "array" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io12 = (input: any): boolean =>
                    Array.isArray(input.oneOf) &&
                    input.oneOf.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            false === Array.isArray(elem) &&
                            $iu0(elem),
                    ) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io13 = (input: any): boolean =>
                    "string" === typeof input.$ref &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io14 = (input: any): boolean =>
                    "null" === input.type &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io15 = (input: any): boolean =>
                    null !== input.type &&
                    undefined === input.type &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io16 = (input: any): boolean =>
                    undefined === input.schemas ||
                    ("object" === typeof input.schemas &&
                        null !== input.schemas &&
                        false === Array.isArray(input.schemas) &&
                        $io17(input.schemas));
                const $io17 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                false === Array.isArray(value) &&
                                $iu1(value)
                            );
                        return true;
                    });
                const $io18 = (input: any): boolean =>
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    "object" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    "object" === typeof input.properties &&
                    null !== input.properties &&
                    false === Array.isArray(input.properties) &&
                    $io19(input.properties) &&
                    (undefined === input.patternProperties ||
                        ("object" === typeof input.patternProperties &&
                            null !== input.patternProperties &&
                            false === Array.isArray(input.patternProperties) &&
                            $io19(input.patternProperties))) &&
                    (undefined === input.additionalProperties ||
                        ("object" === typeof input.additionalProperties &&
                            null !== input.additionalProperties &&
                            false ===
                                Array.isArray(input.additionalProperties) &&
                            $iu0(input.additionalProperties))) &&
                    (undefined === input.required ||
                        (Array.isArray(input.required) &&
                            input.required.every(
                                (elem: any) => "string" === typeof elem,
                            ))) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-patternProperties"] ||
                        ("object" ===
                            typeof input["x-typia-patternProperties"] &&
                            null !== input["x-typia-patternProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-patternProperties"],
                                ) &&
                            $io19(input["x-typia-patternProperties"]))) &&
                    (undefined === input["x-typia-additionalProperties"] ||
                        ("object" ===
                            typeof input["x-typia-additionalProperties"] &&
                            null !== input["x-typia-additionalProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-additionalProperties"],
                                ) &&
                            $iu0(input["x-typia-additionalProperties"])));
                const $io19 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                false === Array.isArray(value) &&
                                $iu0(value)
                            );
                        return true;
                    });
                const $io20 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) => "boolean" === typeof elem,
                    ) &&
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"]) &&
                    "boolean" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io21 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"]))) &&
                    "number" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io22 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"]) &&
                    "string" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io23 = (input: any): boolean =>
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"]) &&
                    "boolean" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io24 = (input: any): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Math.floor(input.minimum) === input.minimum &&
                            -2147483648 <= input.minimum &&
                            input.minimum <= 2147483647)) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Math.floor(input.maximum) === input.maximum &&
                            -2147483648 <= input.maximum &&
                            input.maximum <= 2147483647)) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Math.floor(input.multipleOf) === input.multipleOf &&
                            -2147483648 <= input.multipleOf &&
                            input.multipleOf <= 2147483647)) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"]))) &&
                    "integer" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io25 = (input: any): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum))) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum))) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Number.isFinite(input.multipleOf))) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"]))) &&
                    "number" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io26 = (input: any): boolean =>
                    (undefined === input.minLength ||
                        ("number" === typeof input.minLength &&
                            Math.floor(input.minLength) === input.minLength &&
                            0 <= input.minLength &&
                            input.minLength <= 4294967295)) &&
                    (undefined === input.maxLength ||
                        ("number" === typeof input.maxLength &&
                            Math.floor(input.maxLength) === input.maxLength &&
                            0 <= input.maxLength &&
                            input.maxLength <= 4294967295)) &&
                    (undefined === input.pattern ||
                        "string" === typeof input.pattern) &&
                    (undefined === input.format ||
                        "string" === typeof input.format) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"]) &&
                    "string" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io27 = (input: any): boolean =>
                    "object" === typeof input.items &&
                    null !== input.items &&
                    false === Array.isArray(input.items) &&
                    $iu0(input.items) &&
                    (undefined === input.minItems ||
                        ("number" === typeof input.minItems &&
                            Math.floor(input.minItems) === input.minItems &&
                            0 <= input.minItems &&
                            input.minItems <= 4294967295)) &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295)) &&
                    (undefined === input["x-typia-tuple"] ||
                        ("object" === typeof input["x-typia-tuple"] &&
                            null !== input["x-typia-tuple"] &&
                            $io11(input["x-typia-tuple"]))) &&
                    "array" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io28 = (input: any): boolean =>
                    Array.isArray(input.items) &&
                    input.items.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            false === Array.isArray(elem) &&
                            $iu0(elem),
                    ) &&
                    "number" === typeof input.minItems &&
                    Math.floor(input.minItems) === input.minItems &&
                    0 <= input.minItems &&
                    input.minItems <= 4294967295 &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295)) &&
                    "array" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io29 = (input: any): boolean =>
                    Array.isArray(input.oneOf) &&
                    input.oneOf.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            false === Array.isArray(elem) &&
                            $iu0(elem),
                    ) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io30 = (input: any): boolean =>
                    "string" === typeof input.$ref &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io31 = (input: any): boolean =>
                    "null" === input.type &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io32 = (input: any): boolean =>
                    null !== input.type &&
                    undefined === input.type &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("integer" === input.type) return $io7(input);
                        else if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $iu0(input.items)
                        )
                            return $io10(input);
                        else if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $iu0(elem),
                            )
                        )
                            return $io11(input);
                        else if (undefined !== input.oneOf) return $io12(input);
                        else if (undefined !== input.$ref) return $io13(input);
                        else if ("null" === input.type) return $io14(input);
                        else
                            return (() => {
                                if ($io5(input)) return $io5(input);
                                else if ($io4(input)) return $io4(input);
                                else if ($io1(input)) return $io1(input);
                                else if ($io6(input)) return $io6(input);
                                else if ($io8(input)) return $io8(input);
                                else if ($io9(input)) return $io9(input);
                                else if ($io15(input)) return $io15(input);
                                else return false;
                            })();
                    })();
                const $iu1 = (input: any): any =>
                    (() => {
                        if ("object" === input.type) return $io18(input);
                        else if ("integer" === input.type) return $io24(input);
                        else if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $iu0(input.items)
                        )
                            return $io27(input);
                        else if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $iu0(elem),
                            )
                        )
                            return $io28(input);
                        else if (undefined !== input.oneOf) return $io29(input);
                        else if (undefined !== input.$ref) return $io30(input);
                        else if ("null" === input.type) return $io31(input);
                        else
                            return (() => {
                                if ($io22(input)) return $io22(input);
                                else if ($io21(input)) return $io21(input);
                                else if ($io20(input)) return $io20(input);
                                else if ($io23(input)) return $io23(input);
                                else if ($io25(input)) return $io25(input);
                                else if ($io26(input)) return $io26(input);
                                else if ($io32(input)) return $io32(input);
                                else return false;
                            })();
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            if (false === __is(input)) {
                const $report = (typia.misc.validateClone as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is UltimateUnion => {
                    const $join = (typia.misc.validateClone as any).join;
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.schemas) ||
                                $report(_exceptionable, {
                                    path: _path + ".schemas",
                                    expected: "Array<IJsonSchema>",
                                    value: input.schemas,
                                })) &&
                                input.schemas
                                    .map(
                                        (elem: any, _index2: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem &&
                                                false ===
                                                    Array.isArray(elem)) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".schemas[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                })) &&
                                                $vu0(
                                                    elem,
                                                    _path +
                                                        ".schemas[" +
                                                        _index2 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".schemas[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".schemas",
                                    expected: "Array<IJsonSchema>",
                                    value: input.schemas,
                                }),
                            ((("object" === typeof input.components &&
                                null !== input.components &&
                                false === Array.isArray(input.components)) ||
                                $report(_exceptionable, {
                                    path: _path + ".components",
                                    expected: "IJsonComponents",
                                    value: input.components,
                                })) &&
                                $vo16(
                                    input.components,
                                    _path + ".components",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".components",
                                    expected: "IJsonComponents",
                                    value: input.components,
                                }),
                            "swagger" === input.purpose ||
                                "ajv" === input.purpose ||
                                $report(_exceptionable, {
                                    path: _path + ".purpose",
                                    expected: '("ajv" | "swagger")',
                                    value: input.purpose,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input["enum"]) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<boolean>",
                                    value: input["enum"],
                                })) &&
                                input["enum"]
                                    .map(
                                        (elem: any, _index3: number) =>
                                            "boolean" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["enum"][' +
                                                    _index3 +
                                                    "]",
                                                expected: "boolean",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<boolean>",
                                    value: input["enum"],
                                }),
                            undefined === input["default"] ||
                                "boolean" === typeof input["default"] ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(boolean | undefined)",
                                    value: input["default"],
                                }),
                            "boolean" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"boolean"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index4: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index4 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index4 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            undefined === input.text ||
                                ((Array.isArray(input.text) ||
                                    $report(_exceptionable, {
                                        path: _path + ".text",
                                        expected:
                                            "(Array<IJsDocTagInfo.IText> | undefined)",
                                        value: input.text,
                                    })) &&
                                    input.text
                                        .map(
                                            (elem: any, _index5: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".text[" +
                                                            _index5 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo.IText",
                                                        value: elem,
                                                    })) &&
                                                    $vo3(
                                                        elem,
                                                        _path +
                                                            ".text[" +
                                                            _index5 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".text[" +
                                                        _index5 +
                                                        "]",
                                                    expected:
                                                        "IJsDocTagInfo.IText",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".text",
                                    expected:
                                        "(Array<IJsDocTagInfo.IText> | undefined)",
                                    value: input.text,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.text ||
                                $report(_exceptionable, {
                                    path: _path + ".text",
                                    expected: "string",
                                    value: input.text,
                                }),
                            "string" === typeof input.kind ||
                                $report(_exceptionable, {
                                    path: _path + ".kind",
                                    expected: "string",
                                    value: input.kind,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input["enum"]) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<number>",
                                    value: input["enum"],
                                })) &&
                                input["enum"]
                                    .map(
                                        (elem: any, _index6: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["enum"][' +
                                                    _index6 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<number>",
                                    value: input["enum"],
                                }),
                            undefined === input["default"] ||
                                ("number" === typeof input["default"] &&
                                    Number.isFinite(input["default"])) ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(number | undefined)",
                                    value: input["default"],
                                }),
                            "number" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"number"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index7: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index7 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index7 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index7 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input["enum"]) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<string>",
                                    value: input["enum"],
                                })) &&
                                input["enum"]
                                    .map(
                                        (elem: any, _index8: number) =>
                                            "string" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["enum"][' +
                                                    _index8 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<string>",
                                    value: input["enum"],
                                }),
                            undefined === input["default"] ||
                                "string" === typeof input["default"] ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(string | undefined)",
                                    value: input["default"],
                                }),
                            "string" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"string"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index9: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index9 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index9 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index9 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo6 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input["default"] ||
                                "boolean" === typeof input["default"] ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(boolean | undefined)",
                                    value: input["default"],
                                }),
                            "boolean" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"boolean"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index10: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index10 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index10 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index10 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo7 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.minimum ||
                                ("number" === typeof input.minimum &&
                                    ((Math.floor(input.minimum) ===
                                        input.minimum &&
                                        -2147483648 <= input.minimum &&
                                        input.minimum <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".minimum",
                                            expected: 'number & Type<"int32">',
                                            value: input.minimum,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected:
                                        '((number & Type<"int32">) | undefined)',
                                    value: input.minimum,
                                }),
                            undefined === input.maximum ||
                                ("number" === typeof input.maximum &&
                                    ((Math.floor(input.maximum) ===
                                        input.maximum &&
                                        -2147483648 <= input.maximum &&
                                        input.maximum <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".maximum",
                                            expected: 'number & Type<"int32">',
                                            value: input.maximum,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected:
                                        '((number & Type<"int32">) | undefined)',
                                    value: input.maximum,
                                }),
                            undefined === input.exclusiveMinimum ||
                                "boolean" === typeof input.exclusiveMinimum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMinimum,
                                }),
                            undefined === input.exclusiveMaximum ||
                                "boolean" === typeof input.exclusiveMaximum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMaximum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMaximum,
                                }),
                            undefined === input.multipleOf ||
                                ("number" === typeof input.multipleOf &&
                                    ((Math.floor(input.multipleOf) ===
                                        input.multipleOf &&
                                        -2147483648 <= input.multipleOf &&
                                        input.multipleOf <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".multipleOf",
                                            expected: 'number & Type<"int32">',
                                            value: input.multipleOf,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected:
                                        '((number & Type<"int32">) | undefined)',
                                    value: input.multipleOf,
                                }),
                            undefined === input["default"] ||
                                ("number" === typeof input["default"] &&
                                    Number.isFinite(input["default"])) ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(number | undefined)",
                                    value: input["default"],
                                }),
                            "integer" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"integer"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index11: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index11 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index11 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index11 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo8 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.minimum ||
                                ("number" === typeof input.minimum &&
                                    Number.isFinite(input.minimum)) ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "(number | undefined)",
                                    value: input.minimum,
                                }),
                            undefined === input.maximum ||
                                ("number" === typeof input.maximum &&
                                    Number.isFinite(input.maximum)) ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "(number | undefined)",
                                    value: input.maximum,
                                }),
                            undefined === input.exclusiveMinimum ||
                                "boolean" === typeof input.exclusiveMinimum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMinimum,
                                }),
                            undefined === input.exclusiveMaximum ||
                                "boolean" === typeof input.exclusiveMaximum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMaximum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMaximum,
                                }),
                            undefined === input.multipleOf ||
                                ("number" === typeof input.multipleOf &&
                                    Number.isFinite(input.multipleOf)) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "(number | undefined)",
                                    value: input.multipleOf,
                                }),
                            undefined === input["default"] ||
                                ("number" === typeof input["default"] &&
                                    Number.isFinite(input["default"])) ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(number | undefined)",
                                    value: input["default"],
                                }),
                            "number" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"number"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index12: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index12 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index12 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index12 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo9 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.minLength ||
                                ("number" === typeof input.minLength &&
                                    ((Math.floor(input.minLength) ===
                                        input.minLength &&
                                        0 <= input.minLength &&
                                        input.minLength <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".minLength",
                                            expected: 'number & Type<"uint32">',
                                            value: input.minLength,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".minLength",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.minLength,
                                }),
                            undefined === input.maxLength ||
                                ("number" === typeof input.maxLength &&
                                    ((Math.floor(input.maxLength) ===
                                        input.maxLength &&
                                        0 <= input.maxLength &&
                                        input.maxLength <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".maxLength",
                                            expected: 'number & Type<"uint32">',
                                            value: input.maxLength,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".maxLength",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.maxLength,
                                }),
                            undefined === input.pattern ||
                                "string" === typeof input.pattern ||
                                $report(_exceptionable, {
                                    path: _path + ".pattern",
                                    expected: "(string | undefined)",
                                    value: input.pattern,
                                }),
                            undefined === input.format ||
                                "string" === typeof input.format ||
                                $report(_exceptionable, {
                                    path: _path + ".format",
                                    expected: "(string | undefined)",
                                    value: input.format,
                                }),
                            undefined === input["default"] ||
                                "string" === typeof input["default"] ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(string | undefined)",
                                    value: input["default"],
                                }),
                            "string" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"string"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index13: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index13 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index13 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index13 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo10 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items)) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: input.items,
                                })) &&
                                $vu0(
                                    input.items,
                                    _path + ".items",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: input.items,
                                }),
                            undefined === input.minItems ||
                                ("number" === typeof input.minItems &&
                                    ((Math.floor(input.minItems) ===
                                        input.minItems &&
                                        0 <= input.minItems &&
                                        input.minItems <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".minItems",
                                            expected: 'number & Type<"uint32">',
                                            value: input.minItems,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.minItems,
                                }),
                            undefined === input.maxItems ||
                                ("number" === typeof input.maxItems &&
                                    ((Math.floor(input.maxItems) ===
                                        input.maxItems &&
                                        0 <= input.maxItems &&
                                        input.maxItems <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".maxItems",
                                            expected: 'number & Type<"uint32">',
                                            value: input.maxItems,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.maxItems,
                                }),
                            undefined === input["x-typia-tuple"] ||
                                ((("object" === typeof input["x-typia-tuple"] &&
                                    null !== input["x-typia-tuple"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-tuple"]',
                                        expected:
                                            "(IJsonSchema.ITuple | undefined)",
                                        value: input["x-typia-tuple"],
                                    })) &&
                                    $vo11(
                                        input["x-typia-tuple"],
                                        _path + '["x-typia-tuple"]',
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-tuple"]',
                                    expected:
                                        "(IJsonSchema.ITuple | undefined)",
                                    value: input["x-typia-tuple"],
                                }),
                            "array" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"array"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index14: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index14 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index14 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index14 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo11 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.items) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected: "Array<IJsonSchema>",
                                    value: input.items,
                                })) &&
                                input.items
                                    .map(
                                        (elem: any, _index15: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem &&
                                                false ===
                                                    Array.isArray(elem)) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".items[" +
                                                        _index15 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                })) &&
                                                $vu0(
                                                    elem,
                                                    _path +
                                                        ".items[" +
                                                        _index15 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".items[" +
                                                    _index15 +
                                                    "]",
                                                expected:
                                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected: "Array<IJsonSchema>",
                                    value: input.items,
                                }),
                            ("number" === typeof input.minItems &&
                                ((Math.floor(input.minItems) ===
                                    input.minItems &&
                                    0 <= input.minItems &&
                                    input.minItems <= 4294967295) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: 'number & Type<"uint32">',
                                        value: input.minItems,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: '(number & Type<"uint32">)',
                                    value: input.minItems,
                                }),
                            undefined === input.maxItems ||
                                ("number" === typeof input.maxItems &&
                                    ((Math.floor(input.maxItems) ===
                                        input.maxItems &&
                                        0 <= input.maxItems &&
                                        input.maxItems <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".maxItems",
                                            expected: 'number & Type<"uint32">',
                                            value: input.maxItems,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.maxItems,
                                }),
                            "array" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"array"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index16: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index16 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index16 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index16 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo12 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.oneOf) ||
                                $report(_exceptionable, {
                                    path: _path + ".oneOf",
                                    expected: "Array<IJsonSchema>",
                                    value: input.oneOf,
                                })) &&
                                input.oneOf
                                    .map(
                                        (elem: any, _index17: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem &&
                                                false ===
                                                    Array.isArray(elem)) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".oneOf[" +
                                                        _index17 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                })) &&
                                                $vu0(
                                                    elem,
                                                    _path +
                                                        ".oneOf[" +
                                                        _index17 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".oneOf[" +
                                                    _index17 +
                                                    "]",
                                                expected:
                                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".oneOf",
                                    expected: "Array<IJsonSchema>",
                                    value: input.oneOf,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index18: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index18 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index18 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index18 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo13 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.$ref ||
                                $report(_exceptionable, {
                                    path: _path + ".$ref",
                                    expected: "string",
                                    value: input.$ref,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index19: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index19 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index19 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index19 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo14 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "null" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"null"',
                                    value: input.type,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index20: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index20 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index20 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index20 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo15 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            (null !== input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: "undefined",
                                    value: input.type,
                                })) &&
                                (undefined === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: "undefined",
                                        value: input.type,
                                    })),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index21: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index21 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index21 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index21 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo16 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.schemas ||
                                ((("object" === typeof input.schemas &&
                                    null !== input.schemas &&
                                    false === Array.isArray(input.schemas)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".schemas",
                                        expected:
                                            "(Record<string, IObject | IAlias> | undefined)",
                                        value: input.schemas,
                                    })) &&
                                    $vo17(
                                        input.schemas,
                                        _path + ".schemas",
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + ".schemas",
                                    expected:
                                        "(Record<string, IObject | IAlias> | undefined)",
                                    value: input.schemas,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo17 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        if (RegExp(/(.*)/).test(key))
                                            return (
                                                ((("object" === typeof value &&
                                                    null !== value &&
                                                    false ===
                                                        Array.isArray(value)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            '(IArray & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IInteger & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IJsonComponents.IObject | INullOnly & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IOneOf & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | ITuple & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                                        value: value,
                                                    })) &&
                                                    $vu1(
                                                        value,
                                                        _path + $join(key),
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected:
                                                        '(IArray & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IInteger & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IJsonComponents.IObject | INullOnly & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IOneOf & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | ITuple & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                                    value: value,
                                                })
                                            );
                                        return true;
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    const $vo18 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            "object" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"object"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            ((("object" === typeof input.properties &&
                                null !== input.properties &&
                                false === Array.isArray(input.properties)) ||
                                $report(_exceptionable, {
                                    path: _path + ".properties",
                                    expected: "Record<string, IJsonSchema>",
                                    value: input.properties,
                                })) &&
                                $vo19(
                                    input.properties,
                                    _path + ".properties",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".properties",
                                    expected: "Record<string, IJsonSchema>",
                                    value: input.properties,
                                }),
                            undefined === input.patternProperties ||
                                ((("object" ===
                                    typeof input.patternProperties &&
                                    null !== input.patternProperties &&
                                    false ===
                                        Array.isArray(
                                            input.patternProperties,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".patternProperties",
                                        expected:
                                            "(Record<string, IJsonSchema> | undefined)",
                                        value: input.patternProperties,
                                    })) &&
                                    $vo19(
                                        input.patternProperties,
                                        _path + ".patternProperties",
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + ".patternProperties",
                                    expected:
                                        "(Record<string, IJsonSchema> | undefined)",
                                    value: input.patternProperties,
                                }),
                            undefined === input.additionalProperties ||
                                ((("object" ===
                                    typeof input.additionalProperties &&
                                    null !== input.additionalProperties &&
                                    false ===
                                        Array.isArray(
                                            input.additionalProperties,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".additionalProperties",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                        value: input.additionalProperties,
                                    })) &&
                                    $vu0(
                                        input.additionalProperties,
                                        _path + ".additionalProperties",
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + ".additionalProperties",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                    value: input.additionalProperties,
                                }),
                            undefined === input.required ||
                                ((Array.isArray(input.required) ||
                                    $report(_exceptionable, {
                                        path: _path + ".required",
                                        expected: "(Array<string> | undefined)",
                                        value: input.required,
                                    })) &&
                                    input.required
                                        .map(
                                            (elem: any, _index22: number) =>
                                                "string" === typeof elem ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".required[" +
                                                        _index22 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".required",
                                    expected: "(Array<string> | undefined)",
                                    value: input.required,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index23: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index23 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index23 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index23 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-patternProperties"] ||
                                ((("object" ===
                                    typeof input["x-typia-patternProperties"] &&
                                    null !==
                                        input["x-typia-patternProperties"] &&
                                    false ===
                                        Array.isArray(
                                            input["x-typia-patternProperties"],
                                        )) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-patternProperties"]',
                                        expected:
                                            "(Record<string, IJsonSchema> | undefined)",
                                        value: input[
                                            "x-typia-patternProperties"
                                        ],
                                    })) &&
                                    $vo19(
                                        input["x-typia-patternProperties"],
                                        _path + '["x-typia-patternProperties"]',
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path:
                                        _path + '["x-typia-patternProperties"]',
                                    expected:
                                        "(Record<string, IJsonSchema> | undefined)",
                                    value: input["x-typia-patternProperties"],
                                }),
                            undefined ===
                                input["x-typia-additionalProperties"] ||
                                ((("object" ===
                                    typeof input[
                                        "x-typia-additionalProperties"
                                    ] &&
                                    null !==
                                        input["x-typia-additionalProperties"] &&
                                    false ===
                                        Array.isArray(
                                            input[
                                                "x-typia-additionalProperties"
                                            ],
                                        )) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-additionalProperties"]',
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                        value: input[
                                            "x-typia-additionalProperties"
                                        ],
                                    })) &&
                                    $vu0(
                                        input["x-typia-additionalProperties"],
                                        _path +
                                            '["x-typia-additionalProperties"]',
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-additionalProperties"]',
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                    value: input[
                                        "x-typia-additionalProperties"
                                    ],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo19 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        if (RegExp(/(.*)/).test(key))
                                            return (
                                                ((("object" === typeof value &&
                                                    null !== value &&
                                                    false ===
                                                        Array.isArray(value)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                        value: value,
                                                    })) &&
                                                    $vu0(
                                                        value,
                                                        _path + $join(key),
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: value,
                                                })
                                            );
                                        return true;
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    const $vo20 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input["enum"]) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<boolean>",
                                    value: input["enum"],
                                })) &&
                                input["enum"]
                                    .map(
                                        (elem: any, _index24: number) =>
                                            "boolean" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["enum"][' +
                                                    _index24 +
                                                    "]",
                                                expected: "boolean",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<boolean>",
                                    value: input["enum"],
                                }),
                            undefined === input["default"] ||
                                "boolean" === typeof input["default"] ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(boolean | undefined)",
                                    value: input["default"],
                                }),
                            "boolean" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"boolean"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index25: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index25 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index25 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index25 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo21 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input["enum"]) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<number>",
                                    value: input["enum"],
                                })) &&
                                input["enum"]
                                    .map(
                                        (elem: any, _index26: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["enum"][' +
                                                    _index26 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<number>",
                                    value: input["enum"],
                                }),
                            undefined === input["default"] ||
                                ("number" === typeof input["default"] &&
                                    Number.isFinite(input["default"])) ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(number | undefined)",
                                    value: input["default"],
                                }),
                            "number" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"number"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index27: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index27 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index27 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index27 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo22 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input["enum"]) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<string>",
                                    value: input["enum"],
                                })) &&
                                input["enum"]
                                    .map(
                                        (elem: any, _index28: number) =>
                                            "string" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["enum"][' +
                                                    _index28 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["enum"]',
                                    expected: "Array<string>",
                                    value: input["enum"],
                                }),
                            undefined === input["default"] ||
                                "string" === typeof input["default"] ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(string | undefined)",
                                    value: input["default"],
                                }),
                            "string" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"string"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index29: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index29 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index29 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index29 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo23 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input["default"] ||
                                "boolean" === typeof input["default"] ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(boolean | undefined)",
                                    value: input["default"],
                                }),
                            "boolean" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"boolean"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index30: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index30 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index30 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index30 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo24 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.minimum ||
                                ("number" === typeof input.minimum &&
                                    ((Math.floor(input.minimum) ===
                                        input.minimum &&
                                        -2147483648 <= input.minimum &&
                                        input.minimum <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".minimum",
                                            expected: 'number & Type<"int32">',
                                            value: input.minimum,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected:
                                        '((number & Type<"int32">) | undefined)',
                                    value: input.minimum,
                                }),
                            undefined === input.maximum ||
                                ("number" === typeof input.maximum &&
                                    ((Math.floor(input.maximum) ===
                                        input.maximum &&
                                        -2147483648 <= input.maximum &&
                                        input.maximum <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".maximum",
                                            expected: 'number & Type<"int32">',
                                            value: input.maximum,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected:
                                        '((number & Type<"int32">) | undefined)',
                                    value: input.maximum,
                                }),
                            undefined === input.exclusiveMinimum ||
                                "boolean" === typeof input.exclusiveMinimum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMinimum,
                                }),
                            undefined === input.exclusiveMaximum ||
                                "boolean" === typeof input.exclusiveMaximum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMaximum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMaximum,
                                }),
                            undefined === input.multipleOf ||
                                ("number" === typeof input.multipleOf &&
                                    ((Math.floor(input.multipleOf) ===
                                        input.multipleOf &&
                                        -2147483648 <= input.multipleOf &&
                                        input.multipleOf <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".multipleOf",
                                            expected: 'number & Type<"int32">',
                                            value: input.multipleOf,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected:
                                        '((number & Type<"int32">) | undefined)',
                                    value: input.multipleOf,
                                }),
                            undefined === input["default"] ||
                                ("number" === typeof input["default"] &&
                                    Number.isFinite(input["default"])) ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(number | undefined)",
                                    value: input["default"],
                                }),
                            "integer" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"integer"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index31: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index31 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index31 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index31 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo25 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.minimum ||
                                ("number" === typeof input.minimum &&
                                    Number.isFinite(input.minimum)) ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "(number | undefined)",
                                    value: input.minimum,
                                }),
                            undefined === input.maximum ||
                                ("number" === typeof input.maximum &&
                                    Number.isFinite(input.maximum)) ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "(number | undefined)",
                                    value: input.maximum,
                                }),
                            undefined === input.exclusiveMinimum ||
                                "boolean" === typeof input.exclusiveMinimum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMinimum,
                                }),
                            undefined === input.exclusiveMaximum ||
                                "boolean" === typeof input.exclusiveMaximum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMaximum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMaximum,
                                }),
                            undefined === input.multipleOf ||
                                ("number" === typeof input.multipleOf &&
                                    Number.isFinite(input.multipleOf)) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "(number | undefined)",
                                    value: input.multipleOf,
                                }),
                            undefined === input["default"] ||
                                ("number" === typeof input["default"] &&
                                    Number.isFinite(input["default"])) ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(number | undefined)",
                                    value: input["default"],
                                }),
                            "number" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"number"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index32: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index32 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index32 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index32 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo26 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.minLength ||
                                ("number" === typeof input.minLength &&
                                    ((Math.floor(input.minLength) ===
                                        input.minLength &&
                                        0 <= input.minLength &&
                                        input.minLength <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".minLength",
                                            expected: 'number & Type<"uint32">',
                                            value: input.minLength,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".minLength",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.minLength,
                                }),
                            undefined === input.maxLength ||
                                ("number" === typeof input.maxLength &&
                                    ((Math.floor(input.maxLength) ===
                                        input.maxLength &&
                                        0 <= input.maxLength &&
                                        input.maxLength <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".maxLength",
                                            expected: 'number & Type<"uint32">',
                                            value: input.maxLength,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".maxLength",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.maxLength,
                                }),
                            undefined === input.pattern ||
                                "string" === typeof input.pattern ||
                                $report(_exceptionable, {
                                    path: _path + ".pattern",
                                    expected: "(string | undefined)",
                                    value: input.pattern,
                                }),
                            undefined === input.format ||
                                "string" === typeof input.format ||
                                $report(_exceptionable, {
                                    path: _path + ".format",
                                    expected: "(string | undefined)",
                                    value: input.format,
                                }),
                            undefined === input["default"] ||
                                "string" === typeof input["default"] ||
                                $report(_exceptionable, {
                                    path: _path + '["default"]',
                                    expected: "(string | undefined)",
                                    value: input["default"],
                                }),
                            "string" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"string"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index33: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index33 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index33 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index33 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo27 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items)) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: input.items,
                                })) &&
                                $vu0(
                                    input.items,
                                    _path + ".items",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: input.items,
                                }),
                            undefined === input.minItems ||
                                ("number" === typeof input.minItems &&
                                    ((Math.floor(input.minItems) ===
                                        input.minItems &&
                                        0 <= input.minItems &&
                                        input.minItems <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".minItems",
                                            expected: 'number & Type<"uint32">',
                                            value: input.minItems,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.minItems,
                                }),
                            undefined === input.maxItems ||
                                ("number" === typeof input.maxItems &&
                                    ((Math.floor(input.maxItems) ===
                                        input.maxItems &&
                                        0 <= input.maxItems &&
                                        input.maxItems <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".maxItems",
                                            expected: 'number & Type<"uint32">',
                                            value: input.maxItems,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.maxItems,
                                }),
                            undefined === input["x-typia-tuple"] ||
                                ((("object" === typeof input["x-typia-tuple"] &&
                                    null !== input["x-typia-tuple"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-tuple"]',
                                        expected:
                                            "(IJsonSchema.ITuple | undefined)",
                                        value: input["x-typia-tuple"],
                                    })) &&
                                    $vo11(
                                        input["x-typia-tuple"],
                                        _path + '["x-typia-tuple"]',
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-tuple"]',
                                    expected:
                                        "(IJsonSchema.ITuple | undefined)",
                                    value: input["x-typia-tuple"],
                                }),
                            "array" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"array"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index34: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index34 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index34 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index34 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo28 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.items) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected: "Array<IJsonSchema>",
                                    value: input.items,
                                })) &&
                                input.items
                                    .map(
                                        (elem: any, _index35: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem &&
                                                false ===
                                                    Array.isArray(elem)) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".items[" +
                                                        _index35 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                })) &&
                                                $vu0(
                                                    elem,
                                                    _path +
                                                        ".items[" +
                                                        _index35 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".items[" +
                                                    _index35 +
                                                    "]",
                                                expected:
                                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected: "Array<IJsonSchema>",
                                    value: input.items,
                                }),
                            ("number" === typeof input.minItems &&
                                ((Math.floor(input.minItems) ===
                                    input.minItems &&
                                    0 <= input.minItems &&
                                    input.minItems <= 4294967295) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: 'number & Type<"uint32">',
                                        value: input.minItems,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: '(number & Type<"uint32">)',
                                    value: input.minItems,
                                }),
                            undefined === input.maxItems ||
                                ("number" === typeof input.maxItems &&
                                    ((Math.floor(input.maxItems) ===
                                        input.maxItems &&
                                        0 <= input.maxItems &&
                                        input.maxItems <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".maxItems",
                                            expected: 'number & Type<"uint32">',
                                            value: input.maxItems,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected:
                                        '((number & Type<"uint32">) | undefined)',
                                    value: input.maxItems,
                                }),
                            "array" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"array"',
                                    value: input.type,
                                }),
                            undefined === input.nullable ||
                                "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "(boolean | undefined)",
                                    value: input.nullable,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index36: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index36 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index36 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index36 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo29 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.oneOf) ||
                                $report(_exceptionable, {
                                    path: _path + ".oneOf",
                                    expected: "Array<IJsonSchema>",
                                    value: input.oneOf,
                                })) &&
                                input.oneOf
                                    .map(
                                        (elem: any, _index37: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem &&
                                                false ===
                                                    Array.isArray(elem)) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".oneOf[" +
                                                        _index37 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                })) &&
                                                $vu0(
                                                    elem,
                                                    _path +
                                                        ".oneOf[" +
                                                        _index37 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".oneOf[" +
                                                    _index37 +
                                                    "]",
                                                expected:
                                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".oneOf",
                                    expected: "Array<IJsonSchema>",
                                    value: input.oneOf,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index38: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index38 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index38 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index38 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo30 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.$ref ||
                                $report(_exceptionable, {
                                    path: _path + ".$ref",
                                    expected: "string",
                                    value: input.$ref,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index39: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index39 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index39 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index39 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo31 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "null" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"null"',
                                    value: input.type,
                                }),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index40: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index40 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index40 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index40 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo32 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            (null !== input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: "undefined",
                                    value: input.type,
                                })) &&
                                (undefined === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: "undefined",
                                        value: input.type,
                                    })),
                            undefined === input.deprecated ||
                                "boolean" === typeof input.deprecated ||
                                $report(_exceptionable, {
                                    path: _path + ".deprecated",
                                    expected: "(boolean | undefined)",
                                    value: input.deprecated,
                                }),
                            undefined === input.title ||
                                "string" === typeof input.title ||
                                $report(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "(string | undefined)",
                                    value: input.title,
                                }),
                            undefined === input.description ||
                                "string" === typeof input.description ||
                                $report(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "(string | undefined)",
                                    value: input.description,
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index41: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index41 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index41 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index41 +
                                                        "]",
                                                    expected: "IJsDocTagInfo",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-required"] ||
                                "boolean" ===
                                    typeof input["x-typia-required"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-required"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-required"],
                                }),
                            undefined === input["x-typia-optional"] ||
                                "boolean" ===
                                    typeof input["x-typia-optional"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-optional"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-optional"],
                                }),
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                            undefined === input.$id ||
                                "string" === typeof input.$id ||
                                $report(_exceptionable, {
                                    path: _path + ".$id",
                                    expected: "(string | undefined)",
                                    value: input.$id,
                                }),
                            undefined === input.$recursiveAnchor ||
                                "boolean" === typeof input.$recursiveAnchor ||
                                $report(_exceptionable, {
                                    path: _path + ".$recursiveAnchor",
                                    expected: "(boolean | undefined)",
                                    value: input.$recursiveAnchor,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vu0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("integer" === input.type)
                                return $vo7(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (
                                "object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items) &&
                                $vu0(
                                    input.items,
                                    _path + ".items",
                                    false && _exceptionable,
                                )
                            )
                                return $vo10(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (
                                Array.isArray(input.items) &&
                                input.items
                                    .map(
                                        (elem: any, _index42: number) =>
                                            "object" === typeof elem &&
                                            null !== elem &&
                                            false === Array.isArray(elem) &&
                                            $vu0(
                                                elem,
                                                _path +
                                                    ".items[" +
                                                    _index42 +
                                                    "]",
                                                false && _exceptionable,
                                            ),
                                    )
                                    .every((flag: boolean) => flag)
                            )
                                return $vo11(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.oneOf)
                                return $vo12(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.$ref)
                                return $vo13(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if ("null" === input.type)
                                return $vo14(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else
                                return (
                                    $vo5(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo4(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo1(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo6(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo8(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo9(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo15(input, _path, false && _exceptionable)
                                );
                        })();
                    const $vu1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("object" === input.type)
                                return $vo18(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if ("integer" === input.type)
                                return $vo24(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (
                                "object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items) &&
                                $vu0(
                                    input.items,
                                    _path + ".items",
                                    false && _exceptionable,
                                )
                            )
                                return $vo27(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (
                                Array.isArray(input.items) &&
                                input.items
                                    .map(
                                        (elem: any, _index43: number) =>
                                            "object" === typeof elem &&
                                            null !== elem &&
                                            false === Array.isArray(elem) &&
                                            $vu0(
                                                elem,
                                                _path +
                                                    ".items[" +
                                                    _index43 +
                                                    "]",
                                                false && _exceptionable,
                                            ),
                                    )
                                    .every((flag: boolean) => flag)
                            )
                                return $vo28(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.oneOf)
                                return $vo29(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.$ref)
                                return $vo30(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if ("null" === input.type)
                                return $vo31(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else
                                return (
                                    $vo22(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo21(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo20(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo23(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo25(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo26(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo32(input, _path, false && _exceptionable)
                                );
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "UltimateUnion",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "IJsonApplication",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "IJsonApplication",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "UltimateUnion",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const clone = (input: UltimateUnion): typia.Resolved<UltimateUnion> => {
            const $io1 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "boolean" === typeof elem) &&
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name &&
                (undefined === input.text ||
                    (Array.isArray(input.text) &&
                        input.text.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io3(elem),
                        )));
            const $io3 = (input: any): boolean =>
                "string" === typeof input.text &&
                "string" === typeof input.kind;
            const $io4 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "number" === typeof elem) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io5 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "string" === typeof elem) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io6 = (input: any): boolean =>
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io7 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        Math.floor(input.minimum) === input.minimum &&
                        -2147483648 <= input.minimum &&
                        input.minimum <= 2147483647)) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        Math.floor(input.maximum) === input.maximum &&
                        -2147483648 <= input.maximum &&
                        input.maximum <= 2147483647)) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        Math.floor(input.multipleOf) === input.multipleOf &&
                        -2147483648 <= input.multipleOf &&
                        input.multipleOf <= 2147483647)) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "integer" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io8 = (input: any): boolean =>
                (undefined === input.minimum ||
                    "number" === typeof input.minimum) &&
                (undefined === input.maximum ||
                    "number" === typeof input.maximum) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    "number" === typeof input.multipleOf) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io9 = (input: any): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        Math.floor(input.minLength) === input.minLength &&
                        0 <= input.minLength &&
                        input.minLength <= 4294967295)) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        Math.floor(input.maxLength) === input.maxLength &&
                        0 <= input.maxLength &&
                        input.maxLength <= 4294967295)) &&
                (undefined === input.pattern ||
                    "string" === typeof input.pattern) &&
                (undefined === input.format ||
                    "string" === typeof input.format) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io10 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu0(input.items) &&
                (undefined === input.minItems ||
                    ("number" === typeof input.minItems &&
                        Math.floor(input.minItems) === input.minItems &&
                        0 <= input.minItems &&
                        input.minItems <= 4294967295)) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems &&
                        input.maxItems <= 4294967295)) &&
                (undefined === input["x-typia-tuple"] ||
                    ("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"] &&
                        $io11(input["x-typia-tuple"]))) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io11 = (input: any): boolean =>
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                "number" === typeof input.minItems &&
                Math.floor(input.minItems) === input.minItems &&
                0 <= input.minItems &&
                input.minItems <= 4294967295 &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems &&
                        input.maxItems <= 4294967295)) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io12 = (input: any): boolean =>
                Array.isArray(input.oneOf) &&
                input.oneOf.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io13 = (input: any): boolean =>
                "string" === typeof input.$ref &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io14 = (input: any): boolean =>
                "null" === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io15 = (input: any): boolean =>
                null !== input.type &&
                undefined === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io16 = (input: any): boolean =>
                undefined === input.schemas ||
                ("object" === typeof input.schemas &&
                    null !== input.schemas &&
                    false === Array.isArray(input.schemas) &&
                    $io17(input.schemas));
            const $io17 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $iu1(value)
                        );
                    return true;
                });
            const $io18 = (input: any): boolean =>
                (undefined === input.$id || "string" === typeof input.$id) &&
                "object" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                "object" === typeof input.properties &&
                null !== input.properties &&
                false === Array.isArray(input.properties) &&
                $io19(input.properties) &&
                (undefined === input.patternProperties ||
                    ("object" === typeof input.patternProperties &&
                        null !== input.patternProperties &&
                        false === Array.isArray(input.patternProperties) &&
                        $io19(input.patternProperties))) &&
                (undefined === input.additionalProperties ||
                    ("object" === typeof input.additionalProperties &&
                        null !== input.additionalProperties &&
                        false === Array.isArray(input.additionalProperties) &&
                        $iu0(input.additionalProperties))) &&
                (undefined === input.required ||
                    (Array.isArray(input.required) &&
                        input.required.every(
                            (elem: any) => "string" === typeof elem,
                        ))) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-patternProperties"] ||
                    ("object" === typeof input["x-typia-patternProperties"] &&
                        null !== input["x-typia-patternProperties"] &&
                        false ===
                            Array.isArray(input["x-typia-patternProperties"]) &&
                        $io19(input["x-typia-patternProperties"]))) &&
                (undefined === input["x-typia-additionalProperties"] ||
                    ("object" ===
                        typeof input["x-typia-additionalProperties"] &&
                        null !== input["x-typia-additionalProperties"] &&
                        false ===
                            Array.isArray(
                                input["x-typia-additionalProperties"],
                            ) &&
                        $iu0(input["x-typia-additionalProperties"])));
            const $io19 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $iu0(value)
                        );
                    return true;
                });
            const $io20 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "boolean" === typeof elem) &&
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io21 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "number" === typeof elem) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io22 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "string" === typeof elem) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io23 = (input: any): boolean =>
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io24 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        Math.floor(input.minimum) === input.minimum &&
                        -2147483648 <= input.minimum &&
                        input.minimum <= 2147483647)) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        Math.floor(input.maximum) === input.maximum &&
                        -2147483648 <= input.maximum &&
                        input.maximum <= 2147483647)) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        Math.floor(input.multipleOf) === input.multipleOf &&
                        -2147483648 <= input.multipleOf &&
                        input.multipleOf <= 2147483647)) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "integer" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io25 = (input: any): boolean =>
                (undefined === input.minimum ||
                    "number" === typeof input.minimum) &&
                (undefined === input.maximum ||
                    "number" === typeof input.maximum) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    "number" === typeof input.multipleOf) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io26 = (input: any): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        Math.floor(input.minLength) === input.minLength &&
                        0 <= input.minLength &&
                        input.minLength <= 4294967295)) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        Math.floor(input.maxLength) === input.maxLength &&
                        0 <= input.maxLength &&
                        input.maxLength <= 4294967295)) &&
                (undefined === input.pattern ||
                    "string" === typeof input.pattern) &&
                (undefined === input.format ||
                    "string" === typeof input.format) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io27 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu0(input.items) &&
                (undefined === input.minItems ||
                    ("number" === typeof input.minItems &&
                        Math.floor(input.minItems) === input.minItems &&
                        0 <= input.minItems &&
                        input.minItems <= 4294967295)) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems &&
                        input.maxItems <= 4294967295)) &&
                (undefined === input["x-typia-tuple"] ||
                    ("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"] &&
                        $io11(input["x-typia-tuple"]))) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io28 = (input: any): boolean =>
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                "number" === typeof input.minItems &&
                Math.floor(input.minItems) === input.minItems &&
                0 <= input.minItems &&
                input.minItems <= 4294967295 &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems &&
                        input.maxItems <= 4294967295)) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io29 = (input: any): boolean =>
                Array.isArray(input.oneOf) &&
                input.oneOf.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io30 = (input: any): boolean =>
                "string" === typeof input.$ref &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io31 = (input: any): boolean =>
                "null" === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io32 = (input: any): boolean =>
                null !== input.type &&
                undefined === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $iu0 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io7(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $io10(input);
                    else if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu0(elem),
                        )
                    )
                        return $io11(input);
                    else if (undefined !== input.oneOf) return $io12(input);
                    else if (undefined !== input.$ref) return $io13(input);
                    else if ("null" === input.type) return $io14(input);
                    else
                        return (
                            $io5(input) ||
                            $io4(input) ||
                            $io1(input) ||
                            $io6(input) ||
                            $io8(input) ||
                            $io9(input) ||
                            $io15(input)
                        );
                })();
            const $iu1 = (input: any): any =>
                (() => {
                    if ("object" === input.type) return $io18(input);
                    else if ("integer" === input.type) return $io24(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $io27(input);
                    else if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu0(elem),
                        )
                    )
                        return $io28(input);
                    else if (undefined !== input.oneOf) return $io29(input);
                    else if (undefined !== input.$ref) return $io30(input);
                    else if ("null" === input.type) return $io31(input);
                    else
                        return (
                            $io22(input) ||
                            $io21(input) ||
                            $io20(input) ||
                            $io23(input) ||
                            $io25(input) ||
                            $io26(input) ||
                            $io32(input)
                        );
                })();
            const $throws = (typia.misc.validateClone as any).throws;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co0(elem)
                        : (elem as any),
                );
            const $cp1 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $cu0(elem)
                        : (elem as any),
                );
            const $cp2 = (input: any) => input.map((elem: any) => elem as any);
            const $cp3 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co2(elem)
                        : (elem as any),
                );
            const $cp4 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co3(elem)
                        : (elem as any),
                );
            const $cp5 = (input: any) => input.map((elem: any) => elem as any);
            const $cp6 = (input: any) => input.map((elem: any) => elem as any);
            const $co0 = (input: any): any => ({
                schemas: Array.isArray(input.schemas)
                    ? $cp1(input.schemas)
                    : (input.schemas as any),
                components:
                    "object" === typeof input.components &&
                    null !== input.components
                        ? $co16(input.components)
                        : (input.components as any),
                purpose: input.purpose as any,
            });
            const $co1 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp2(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co2 = (input: any): any => ({
                name: input.name as any,
                text: Array.isArray(input.text)
                    ? $cp4(input.text)
                    : (input.text as any),
            });
            const $co3 = (input: any): any => ({
                text: input.text as any,
                kind: input.kind as any,
            });
            const $co4 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp5(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co5 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp6(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co6 = (input: any): any => ({
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co7 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co8 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co9 = (input: any): any => ({
                minLength: input.minLength as any,
                maxLength: input.maxLength as any,
                pattern: input.pattern as any,
                format: input.format as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co10 = (input: any): any => ({
                items:
                    "object" === typeof input.items && null !== input.items
                        ? $cu0(input.items)
                        : (input.items as any),
                minItems: input.minItems as any,
                maxItems: input.maxItems as any,
                "x-typia-tuple":
                    "object" === typeof input["x-typia-tuple"] &&
                    null !== input["x-typia-tuple"]
                        ? $co11(input["x-typia-tuple"])
                        : (input["x-typia-tuple"] as any),
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co11 = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? $cp1(input.items)
                    : (input.items as any),
                minItems: input.minItems as any,
                maxItems: input.maxItems as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co12 = (input: any): any => ({
                oneOf: Array.isArray(input.oneOf)
                    ? $cp1(input.oneOf)
                    : (input.oneOf as any),
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co13 = (input: any): any => ({
                $ref: input.$ref as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co14 = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co15 = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co16 = (input: any): any => ({
                schemas:
                    "object" === typeof input.schemas && null !== input.schemas
                        ? $co17(input.schemas)
                        : (input.schemas as any),
            });
            const $co17 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $cu1(value)
                                : (value as any);
                        continue;
                    }
                }
                return output;
            };
            const $co18 = (input: any): any => ({
                $id: input.$id as any,
                type: input.type as any,
                nullable: input.nullable as any,
                properties:
                    "object" === typeof input.properties &&
                    null !== input.properties
                        ? $co19(input.properties)
                        : (input.properties as any),
                patternProperties:
                    "object" === typeof input.patternProperties &&
                    null !== input.patternProperties
                        ? $co19(input.patternProperties)
                        : (input.patternProperties as any),
                additionalProperties:
                    "object" === typeof input.additionalProperties &&
                    null !== input.additionalProperties
                        ? $cu0(input.additionalProperties)
                        : (input.additionalProperties as any),
                required: Array.isArray(input.required)
                    ? $cp6(input.required)
                    : (input.required as any),
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-patternProperties":
                    "object" === typeof input["x-typia-patternProperties"] &&
                    null !== input["x-typia-patternProperties"]
                        ? $co19(input["x-typia-patternProperties"])
                        : (input["x-typia-patternProperties"] as any),
                "x-typia-additionalProperties":
                    "object" === typeof input["x-typia-additionalProperties"] &&
                    null !== input["x-typia-additionalProperties"]
                        ? $cu0(input["x-typia-additionalProperties"])
                        : (input["x-typia-additionalProperties"] as any),
            });
            const $co19 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $cu0(value)
                                : (value as any);
                        continue;
                    }
                }
                return output;
            };
            const $co20 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp2(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co21 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp5(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co22 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp6(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co23 = (input: any): any => ({
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co24 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co25 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co26 = (input: any): any => ({
                minLength: input.minLength as any,
                maxLength: input.maxLength as any,
                pattern: input.pattern as any,
                format: input.format as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co27 = (input: any): any => ({
                items:
                    "object" === typeof input.items && null !== input.items
                        ? $cu0(input.items)
                        : (input.items as any),
                minItems: input.minItems as any,
                maxItems: input.maxItems as any,
                "x-typia-tuple":
                    "object" === typeof input["x-typia-tuple"] &&
                    null !== input["x-typia-tuple"]
                        ? $co11(input["x-typia-tuple"])
                        : (input["x-typia-tuple"] as any),
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co28 = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? $cp1(input.items)
                    : (input.items as any),
                minItems: input.minItems as any,
                maxItems: input.maxItems as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co29 = (input: any): any => ({
                oneOf: Array.isArray(input.oneOf)
                    ? $cp1(input.oneOf)
                    : (input.oneOf as any),
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co30 = (input: any): any => ({
                $ref: input.$ref as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co31 = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co32 = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp3(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $co7(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $co10(input);
                    else if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu0(elem),
                        )
                    )
                        return $co11(input);
                    else if (undefined !== input.oneOf) return $co12(input);
                    else if (undefined !== input.$ref) return $co13(input);
                    else if ("null" === input.type) return $co14(input);
                    else
                        return (() => {
                            if ($io5(input)) return $co5(input);
                            else if ($io4(input)) return $co4(input);
                            else if ($io1(input)) return $co1(input);
                            else if ($io6(input)) return $co6(input);
                            else if ($io8(input)) return $co8(input);
                            else if ($io9(input)) return $co9(input);
                            else if ($io15(input)) return $co15(input);
                            else
                                $throws({
                                    expected:
                                        '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                    value: input,
                                });
                        })();
                })();
            const $cu1 = (input: any): any =>
                (() => {
                    if ("object" === input.type) return $co18(input);
                    else if ("integer" === input.type) return $co24(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $co27(input);
                    else if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu0(elem),
                        )
                    )
                        return $co28(input);
                    else if (undefined !== input.oneOf) return $co29(input);
                    else if (undefined !== input.$ref) return $co30(input);
                    else if ("null" === input.type) return $co31(input);
                    else
                        return (() => {
                            if ($io22(input)) return $co22(input);
                            else if ($io21(input)) return $co21(input);
                            else if ($io20(input)) return $co20(input);
                            else if ($io23(input)) return $co23(input);
                            else if ($io25(input)) return $co25(input);
                            else if ($io26(input)) return $co26(input);
                            else if ($io32(input)) return $co32(input);
                            else
                                $throws({
                                    expected:
                                        '(IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                    value: input,
                                });
                        })();
                })();
            return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    })(input),
);
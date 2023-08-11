import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagRange } from "../../../structures/TagRange";

export const test_json_isStringify_TagRange = _test_json_isStringify<TagRange>(
    TagRange,
)((input: TagRange): string | null => {
    const is = (input: any): input is TagRange => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "number" === typeof input.greater &&
            Number.isFinite(input.greater) &&
            3 < input.greater &&
            "number" === typeof input.greater_equal &&
            Number.isFinite(input.greater_equal) &&
            3 <= input.greater_equal &&
            "number" === typeof input.less &&
            Number.isFinite(input.less) &&
            7 > input.less &&
            "number" === typeof input.less_equal &&
            Number.isFinite(input.less_equal) &&
            7 >= input.less_equal &&
            "number" === typeof input.greater_less &&
            3 < input.greater_less &&
            7 > input.greater_less &&
            "number" === typeof input.greater_equal_less &&
            3 <= input.greater_equal_less &&
            7 > input.greater_equal_less &&
            "number" === typeof input.greater_less_equal &&
            3 < input.greater_less_equal &&
            7 >= input.greater_less_equal &&
            "number" === typeof input.greater_equal_less_equal &&
            3 <= input.greater_equal_less_equal &&
            7 >= input.greater_equal_less_equal;
        return "object" === typeof input && null !== input && $io0(input);
    };
    const stringify = (input: TagRange): string => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.greater &&
            3 < input.greater &&
            "number" === typeof input.greater_equal &&
            3 <= input.greater_equal &&
            "number" === typeof input.less &&
            7 > input.less &&
            "number" === typeof input.less_equal &&
            7 >= input.less_equal &&
            "number" === typeof input.greater_less &&
            3 < input.greater_less &&
            7 > input.greater_less &&
            "number" === typeof input.greater_equal_less &&
            3 <= input.greater_equal_less &&
            7 > input.greater_equal_less &&
            "number" === typeof input.greater_less_equal &&
            3 < input.greater_less_equal &&
            7 >= input.greater_less_equal &&
            "number" === typeof input.greater_equal_less_equal &&
            3 <= input.greater_equal_less_equal &&
            7 >= input.greater_equal_less_equal;
        const $number = (typia.json.createIsStringify as any).number;
        const $so0 = (input: any): any =>
            `{"value":${`[${input.value
                .map(
                    (elem: any) =>
                        `{"greater":${$number(
                            (elem as any).greater,
                        )},"greater_equal":${$number(
                            (elem as any).greater_equal,
                        )},"less":${$number(
                            (elem as any).less,
                        )},"less_equal":${$number(
                            (elem as any).less_equal,
                        )},"greater_less":${$number(
                            (elem as any).greater_less,
                        )},"greater_equal_less":${$number(
                            (elem as any).greater_equal_less,
                        )},"greater_less_equal":${$number(
                            (elem as any).greater_less_equal,
                        )},"greater_equal_less_equal":${$number(
                            (elem as any).greater_equal_less_equal,
                        )}}`,
                )
                .join(",")}]`}}`;
        return $so0(input);
    };
    return is(input) ? stringify(input) : null;
});
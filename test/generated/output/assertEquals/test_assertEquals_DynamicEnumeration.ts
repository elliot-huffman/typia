import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_assertEquals_DynamicEnumeration = _test_assertEquals(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) =>
        ((
            input: any,
        ): {
            ar?: string | undefined;
            "zh-Hans"?: string | undefined;
            "zh-Hant"?: string | undefined;
            en?: string | undefined;
            fr?: string | undefined;
            de?: string | undefined;
            ja?: string | undefined;
            ko?: string | undefined;
            pt?: string | undefined;
            ru?: string | undefined;
        } => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is {
                ar?: string | undefined;
                "zh-Hans"?: string | undefined;
                "zh-Hant"?: string | undefined;
                en?: string | undefined;
                fr?: string | undefined;
                de?: string | undefined;
                ja?: string | undefined;
                ko?: string | undefined;
                pt?: string | undefined;
                ru?: string | undefined;
            } => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.ar || "string" === typeof input.ar) &&
                    (undefined === input["zh-Hans"] ||
                        "string" === typeof input["zh-Hans"]) &&
                    (undefined === input["zh-Hant"] ||
                        "string" === typeof input["zh-Hant"]) &&
                    (undefined === input.en || "string" === typeof input.en) &&
                    (undefined === input.fr || "string" === typeof input.fr) &&
                    (undefined === input.de || "string" === typeof input.de) &&
                    (undefined === input.ja || "string" === typeof input.ja) &&
                    (undefined === input.ko || "string" === typeof input.ko) &&
                    (undefined === input.pt || "string" === typeof input.pt) &&
                    (undefined === input.ru || "string" === typeof input.ru) &&
                    (0 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "ar",
                                    "zh-Hans",
                                    "zh-Hant",
                                    "en",
                                    "fr",
                                    "de",
                                    "ja",
                                    "ko",
                                    "pt",
                                    "ru",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input, true)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is {
                    ar?: string | undefined;
                    "zh-Hans"?: string | undefined;
                    "zh-Hant"?: string | undefined;
                    en?: string | undefined;
                    fr?: string | undefined;
                    de?: string | undefined;
                    ja?: string | undefined;
                    ko?: string | undefined;
                    pt?: string | undefined;
                    ru?: string | undefined;
                } => {
                    const $guard = (typia.assertEquals as any).guard;
                    const $join = (typia.assertEquals as any).join;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.ar ||
                            "string" === typeof input.ar ||
                            $guard(_exceptionable, {
                                path: _path + ".ar",
                                expected: "(string | undefined)",
                                value: input.ar,
                            })) &&
                        (undefined === input["zh-Hans"] ||
                            "string" === typeof input["zh-Hans"] ||
                            $guard(_exceptionable, {
                                path: _path + '["zh-Hans"]',
                                expected: "(string | undefined)",
                                value: input["zh-Hans"],
                            })) &&
                        (undefined === input["zh-Hant"] ||
                            "string" === typeof input["zh-Hant"] ||
                            $guard(_exceptionable, {
                                path: _path + '["zh-Hant"]',
                                expected: "(string | undefined)",
                                value: input["zh-Hant"],
                            })) &&
                        (undefined === input.en ||
                            "string" === typeof input.en ||
                            $guard(_exceptionable, {
                                path: _path + ".en",
                                expected: "(string | undefined)",
                                value: input.en,
                            })) &&
                        (undefined === input.fr ||
                            "string" === typeof input.fr ||
                            $guard(_exceptionable, {
                                path: _path + ".fr",
                                expected: "(string | undefined)",
                                value: input.fr,
                            })) &&
                        (undefined === input.de ||
                            "string" === typeof input.de ||
                            $guard(_exceptionable, {
                                path: _path + ".de",
                                expected: "(string | undefined)",
                                value: input.de,
                            })) &&
                        (undefined === input.ja ||
                            "string" === typeof input.ja ||
                            $guard(_exceptionable, {
                                path: _path + ".ja",
                                expected: "(string | undefined)",
                                value: input.ja,
                            })) &&
                        (undefined === input.ko ||
                            "string" === typeof input.ko ||
                            $guard(_exceptionable, {
                                path: _path + ".ko",
                                expected: "(string | undefined)",
                                value: input.ko,
                            })) &&
                        (undefined === input.pt ||
                            "string" === typeof input.pt ||
                            $guard(_exceptionable, {
                                path: _path + ".pt",
                                expected: "(string | undefined)",
                                value: input.pt,
                            })) &&
                        (undefined === input.ru ||
                            "string" === typeof input.ru ||
                            $guard(_exceptionable, {
                                path: _path + ".ru",
                                expected: "(string | undefined)",
                                value: input.ru,
                            })) &&
                        (0 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    [
                                        "ar",
                                        "zh-Hans",
                                        "zh-Hant",
                                        "en",
                                        "fr",
                                        "de",
                                        "ja",
                                        "ko",
                                        "pt",
                                        "ru",
                                    ].some((prop: any) => key === prop)
                                )
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            }));
                    return (
                        ((("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicEnumeration",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicEnumeration",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        })(input),
);
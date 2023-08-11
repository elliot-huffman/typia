import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { TagFormat } from "../../../structures/TagFormat";

export const test_json_assertParse_TagFormat =
    _test_json_assertParse<TagFormat>(TagFormat)(
        (input: string): typia.Primitive<TagFormat> => {
            const assert = (input: any): TagFormat => {
                const __is = (input: any): input is TagFormat => {
                    const $is_uuid = (typia.json.createAssertParse as any)
                        .is_uuid;
                    const $is_email = (typia.json.createAssertParse as any)
                        .is_email;
                    const $is_url = (typia.json.createAssertParse as any)
                        .is_url;
                    const $is_ipv4 = (typia.json.createAssertParse as any)
                        .is_ipv4;
                    const $is_ipv6 = (typia.json.createAssertParse as any)
                        .is_ipv6;
                    const $is_date = (typia.json.createAssertParse as any)
                        .is_date;
                    const $is_datetime = (typia.json.createAssertParse as any)
                        .is_datetime;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).uuid &&
                        $is_uuid((input as any).uuid) &&
                        "string" === typeof (input as any).email &&
                        $is_email((input as any).email) &&
                        "string" === typeof (input as any).url &&
                        $is_url((input as any).url) &&
                        "string" === typeof (input as any).ipv4 &&
                        $is_ipv4((input as any).ipv4) &&
                        "string" === typeof (input as any).ipv6 &&
                        $is_ipv6((input as any).ipv6) &&
                        "string" === typeof (input as any).date &&
                        $is_date((input as any).date) &&
                        "string" === typeof (input as any).date_time &&
                        $is_datetime((input as any).date_time) &&
                        "string" === typeof (input as any).custom
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagFormat => {
                        const $guard = (typia.json.createAssertParse as any)
                            .guard;
                        const $is_uuid = (typia.json.createAssertParse as any)
                            .is_uuid;
                        const $is_email = (typia.json.createAssertParse as any)
                            .is_email;
                        const $is_url = (typia.json.createAssertParse as any)
                            .is_url;
                        const $is_ipv4 = (typia.json.createAssertParse as any)
                            .is_ipv4;
                        const $is_ipv6 = (typia.json.createAssertParse as any)
                            .is_ipv6;
                        const $is_date = (typia.json.createAssertParse as any)
                            .is_date;
                        const $is_datetime = (
                            typia.json.createAssertParse as any
                        ).is_datetime;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("string" === typeof input.uuid &&
                                ($is_uuid(input.uuid) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uuid",
                                        expected: "string (@format uuid)",
                                        value: input.uuid,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uuid",
                                    expected: "string",
                                    value: input.uuid,
                                })) &&
                            (("string" === typeof input.email &&
                                ($is_email(input.email) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".email",
                                        expected: "string (@format email)",
                                        value: input.email,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "string",
                                    value: input.email,
                                })) &&
                            (("string" === typeof input.url &&
                                ($is_url(input.url) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".url",
                                        expected: "string (@format url)",
                                        value: input.url,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".url",
                                    expected: "string",
                                    value: input.url,
                                })) &&
                            (("string" === typeof input.ipv4 &&
                                ($is_ipv4(input.ipv4) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".ipv4",
                                        expected: "string (@format ipv4)",
                                        value: input.ipv4,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ipv4",
                                    expected: "string",
                                    value: input.ipv4,
                                })) &&
                            (("string" === typeof input.ipv6 &&
                                ($is_ipv6(input.ipv6) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".ipv6",
                                        expected: "string (@format ipv6)",
                                        value: input.ipv6,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ipv6",
                                    expected: "string",
                                    value: input.ipv6,
                                })) &&
                            (("string" === typeof input.date &&
                                ($is_date(input.date) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".date",
                                        expected: "string (@format date)",
                                        value: input.date,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".date",
                                    expected: "string",
                                    value: input.date,
                                })) &&
                            (("string" === typeof input.date_time &&
                                ($is_datetime(input.date_time) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".date_time",
                                        expected: "string (@format datetime)",
                                        value: input.date_time,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".date_time",
                                    expected: "string",
                                    value: input.date_time,
                                })) &&
                            ("string" === typeof input.custom ||
                                $guard(_exceptionable, {
                                    path: _path + ".custom",
                                    expected: "string",
                                    value: input.custom,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagFormat",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagFormat",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input) as any;
        },
    );
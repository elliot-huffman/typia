import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validate } from "./_test_validate";

export const test_validate_class_method = _test_validate(
    "class method",
    ClassMethod.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         (input as any).name = [];
    //         return ["$input.name"];
    //     },
    //     (input) => {
    //         (input as any).age = () => 3;
    //         return ["$input.age"];
    //     },
    // ],
);

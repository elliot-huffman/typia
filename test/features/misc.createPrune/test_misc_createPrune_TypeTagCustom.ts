import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_createPrune_TypeTagCustom = _test_misc_prune(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(typia.misc.createPrune<TypeTagCustom>());
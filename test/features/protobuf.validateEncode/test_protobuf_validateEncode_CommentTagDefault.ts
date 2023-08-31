import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_validateEncode_CommentTagDefault =
    _test_protobuf_validateEncode("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagDefault>(input),
        message: typia.protobuf.message<CommentTagDefault>(),
        decode: typia.protobuf.createDecode<CommentTagDefault>(),
    });
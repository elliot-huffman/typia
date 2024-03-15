import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { HttpFormDataProgrammer } from "./HttpFormDataProgrammer";

export namespace HttpAssertFormDataProgrammer {
  export const write =
    (project: ITypiaProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string, init?: ts.Expression): ts.ArrowFunction =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "input",
            ts.factory.createTypeReferenceNode("FormData"),
          ),
          AssertProgrammer.Guardian.parameter(init),
        ],
        ts.factory.createImportTypeNode(
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral("typia"),
          ),
          undefined,
          ts.factory.createIdentifier("Resolved"),
          [
            ts.factory.createTypeReferenceNode(
              name ?? TypeFactory.getFullName(project.checker)(type),
            ),
          ],
          false,
        ),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "decode",
            HttpFormDataProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(type, name),
          ),
          StatementFactory.constant(
            "assert",
            AssertProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(false)(type, name),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("decode"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createAsExpression(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("assert"),
                undefined,
                [
                  ts.factory.createIdentifier("output"),
                  AssertProgrammer.Guardian.identifier(),
                ],
              ),
              TypeFactory.keyword("any"),
            ),
          ),
        ]),
      );
}
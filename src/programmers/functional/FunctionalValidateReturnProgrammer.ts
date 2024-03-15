import ts from "typescript";

import { StatementFactory } from "../../factories/StatementFactory";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { StringUtil } from "../../utils/StringUtil";

import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionalValidateFunctionProgrammer } from "./FunctionalValidateFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";
import { ImportProgrammer } from "../ImportProgrammer";
import { ITypiaContext } from "../../transformers/ITypiaContext";

export namespace FunctionalValidateReturnProgrammer {
  export const write =
    (context: ITypiaContext) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.ArrowFunction => {
      const { async, statements } = writeStatements(project)(modulo)(equals)(
        expression,
        declaration,
      );
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        FunctionalValidateFunctionProgrammer.getReturnTypeNode(
          declaration,
          async,
        ),
        undefined,
        ts.factory.createBlock(statements, true),
      );
    };

  export const writeStatements =
    (project: ITypiaProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): {
      async: boolean;
      statements: ts.Statement[];
    } => {
      const { type, async } = FunctionalGeneralProgrammer.getReturnType(
        project.checker,
      )(declaration);
      const caller: ts.CallExpression = ts.factory.createCallExpression(
        expression,
        undefined,
        declaration.parameters.map((p) =>
          ts.factory.createIdentifier(p.name.getText()),
        ),
      );

      const name: string = StringUtil.escapeDuplicate(
        declaration.parameters.map((p) => p.name.getText()),
      )("result");
      const statements: ts.Statement[] = [
        StatementFactory.constant(
          name,
          ts.factory.createCallExpression(
            ValidateProgrammer.write(project)(modulo)(equals)(type),
            undefined,
            [async ? ts.factory.createAwaitExpression(caller) : caller],
          ),
        ),
        ts.factory.createIfStatement(
          ts.factory.createPrefixUnaryExpression(
            ts.SyntaxKind.ExclamationToken,
            ts.factory.createPropertyAccessExpression(
              ts.factory.createIdentifier(name),
              ts.factory.createIdentifier("success"),
            ),
          ),
          ts.factory.createExpressionStatement(
            ts.factory.createBinaryExpression(
              ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier(name),
                ts.factory.createIdentifier("errors"),
              ),
              ts.factory.createToken(ts.SyntaxKind.EqualsToken),
              FunctionalValidateFunctionProgrammer.hookErrors({
                expression: ts.factory.createPropertyAccessExpression(
                  ts.factory.createIdentifier(name),
                  ts.factory.createIdentifier("errors"),
                ),
                replacer: ts.factory.createStringLiteral("$input.return"),
              }),
            ),
          ),
        ),
        ts.factory.createReturnStatement(ts.factory.createIdentifier("result")),
      ];
      return {
        async,
        statements,
      };
    };
}
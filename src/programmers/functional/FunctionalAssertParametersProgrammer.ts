import ts from "typescript";

import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionalAssertFunctionProgrammer } from "./FunctionalAssertFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";
import { ITypiaContext } from "../../transformers/ITypiaContext";

export namespace FunctionalAssertParametersProgrammer {
  export const write =
    (context: ITypiaContext) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
      init?: ts.Expression,
    ): ts.ArrowFunction => {
      const wrapper = FunctionalAssertFunctionProgrammer.errorFactoryWrapper(
        modulo,
      )(declaration.parameters)(init);
      const { async } =
        FunctionalGeneralProgrammer.getReturnType(context)(declaration);
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        declaration.type,
        undefined,
        ts.factory.createBlock(
          [
            wrapper.variable,
            ...argumentExpressions(project)(modulo)(equals)(
              declaration.parameters,
              wrapper.name,
            ).map(ts.factory.createExpressionStatement),
            ts.factory.createReturnStatement(
              ts.factory.createCallExpression(
                expression,
                undefined,
                declaration.parameters.map((p) =>
                  ts.factory.createIdentifier(p.name.getText()),
                ),
              ),
            ),
          ],
          true,
        ),
      );
    };

  export const argumentExpressions =
    (project: ITypiaProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      parameters: readonly ts.ParameterDeclaration[],
      wrapper: string,
    ): ts.CallExpression[] =>
      parameters.map((p, i) =>
        ts.factory.createCallExpression(
          AssertProgrammer.write(project)(modulo)(equals)(
            p.type
              ? project.checker.getTypeFromTypeNode(p.type)
              : project.checker.getTypeFromTypeNode(TypeFactory.keyword("any")),
            undefined,
            FunctionalAssertFunctionProgrammer.hookPath({
              wrapper,
              replacer: `$input.parameters[${i}]`,
            }),
          ),
          undefined,
          [ts.factory.createIdentifier(p.name.getText())],
        ),
      );
}
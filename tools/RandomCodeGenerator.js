import { Comments } from "./utils";
import { Helpers } from "./utils";
import {
  Java,
  Kotlin,
  PHP,
  Python,
  Powershell,
  Rust,
  SQL,
  Swift,
  TypeScript,
  VBA,
} from "./languages";
import * as LANGUAGES from "./languages";

function generateRandomCode(language, lines) {
  let firstLine = "";
  let fillerLineQty = "";
  let fillerLines = [];
  let lastLine = "";
  const addComment = (Math.random() + 0.5) >> 0;
  let imports = "";
  // 3 lines will be dedicated to a for loop if lines > 7
  let includeForLoop = parseInt(lines, 10) > 7;

  switch (language) {
    case "cobol":
      return LANGUAGES.COBOL.generateRandomCode(lines);
    case "cplusplus":
      return LANGUAGES.CPlusPlus.generateRandomCode(lines);
    case "csharp":
      return LANGUAGES.CSharp.generateRandomCode(lines, addComment);
    case "css":
      return LANGUAGES.Css.generateRandomCode(lines, addComment);
    case "docker":
      return LANGUAGES.Docker.generateRandomCode(lines);
    case "fsharp":
      return LANGUAGES.FSharp.generateRandomCode(lines);
    case "go":
      return LANGUAGES.Go.generateRandomCode(lines);
    case "js":
      return LANGUAGES.JavaScript.generateRandomCode(
        lines,
        addComment,
        includeForLoop
      );
    case "ts":
      const functionProperties = `${Helpers.getRandomSingleCharacter()}: any, ${Helpers.getRandomSingleCharacter()}: any`;

      const firstTsLines = [
        (randomFunctionName) => {
          return `function ${randomFunctionName}(${functionProperties}): any {${Helpers.addNewLine()}`;
        },
        (randomFunctionName) => {
          return `const ${randomFunctionName} = function (${functionProperties}): any {${Helpers.addNewLine()}`;
        },
      ];

      firstLine = Helpers.getRandomEntry(firstTsLines)(
        TypeScript.getRandomFunctionName()
      );

      // - 3 because we're now adding a firstLine, returnLine and lastLine
      fillerLineQty = parseInt(lines, 10) - 3;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment());
      }

      // if line length > 7
      if (includeForLoop) {
        // add 2 lines
        fillerLines.push(`    ${TypeScript.getRandomFillerLine()}`);
        fillerLines.push(`    ${TypeScript.getRandomFillerLine()}`);

        // add 3 lines
        const forLoopLines = TypeScript.getRandomForLoopAsArray(); // return array

        fillerLines = [...fillerLines, ...forLoopLines];

        // add the rest
        for (let i = 6; i <= fillerLineQty; i++) {
          fillerLines.push(`    ${TypeScript.getRandomFillerLine()}`);
        }
      } else {
        for (let i = 1; i <= fillerLineQty; i++) {
          fillerLines.push(`    ${TypeScript.getRandomFillerLine()}`);
        }
      }

      fillerLines.push(TypeScript.getRandomReturn());

      lastLine = `${Helpers.addNewLine()}}`;

      return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
    case "php":
      firstLine = `<?php ${Helpers.addNewLine(2)}`;
      let namespaceLine = `${PHP.getRandomNamespace()}${Helpers.addNewLine(2)}`;

      let classLine = `class ${PHP.getRandomClassName()} {${Helpers.addNewLine()}`;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        classLine += `${Comments.getRandomComment()}${Helpers.addNewLine()}`;
      }

      let functionLine = `    ${PHP.getRandomFunctionKeyword()} ${PHP.getRandomFunctionName()}(${PHP.getRandomParamtersRead()}) {${Helpers.addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`        ${PHP.getRandomFillerLine()}`);
      }

      let endFunctionLine = `${Helpers.addNewLine()}    }${Helpers.addNewLine()}`;
      lastLine = `}`;

      return (
        firstLine +
        namespaceLine +
        classLine +
        functionLine +
        fillerLines.join(Helpers.addNewLine()) +
        endFunctionLine +
        lastLine
      );
    case "powershell":
      firstLine = `function ${Powershell.getRandomFunctionName()} { ${Helpers.addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        firstLine += `${Comments.getRandomComment(
          "powershell"
        )}${Helpers.addNewLine()}`;
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Powershell.getRandomFillerLine()}`);
      }

      lastLine = `${Helpers.addNewLine()}}`;

      return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
    case "java":
      firstLine = `${Java.getRandomMethodSignature()}() {${Helpers.addNewLine()}`;
      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Java.getRandomFillerLine()}`);
      }

      lastLine = `${Helpers.addNewLine()}}`;

      return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
    case "kotlin":
      firstLine = `${Kotlin.getRandomMethodSignature()} {${Helpers.addNewLine()}`;
      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Kotlin.getRandomFillerLine()}`);
      }

      lastLine = `${Helpers.addNewLine()}}`;

      return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
    case "python":
      imports = `${Python.getRandomImport()}${Helpers.addNewLine(2)}`;
      firstLine = `def ${Python.getRandomFunctionName()}():${Helpers.addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`\t${Python.getRandomFillerLine()}`);
      }

      return (
        imports + firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine
      );
    case "rust":
      firstLine = `fn ${Rust.getRandomFunctionName()}() -> ${Rust.getRandomType()} {${Helpers.addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Rust.getRandomFillerLine()}`);
      }

      lastLine = `${Helpers.addNewLine()}}`;

      return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
    case "sql":
      firstLine =
        "SELECT" + ` ${SQL.getRandomFieldName()}${Helpers.addNewLine()}`;
      fillerLineQty = parseInt(lines, 10);

      //first loop is just for field names sorry
      for (let i = 1; i <= fillerLineQty; i++) {
        const lineOptions = [` ,${SQL.getRandomFieldName()}`];

        fillerLines.push(Helpers.getRandomEntry(lineOptions));
      }
      let lineBreak;
      if (fillerLineQty > 1) {
        lineBreak = Helpers.addNewLine();
      } else lineBreak = "";
      let fromStatement =
        lineBreak +
        "FROM" +
        ` ${SQL.getRandomSchemaName()}` +
        `.${SQL.getRandomTableName()}`;

      let whereCond = "";
      //this part is for the other functions like WHERE, GROUP BY etc.
      if (Helpers.getRandomInt(1, 10) <= 3) {
        whereCond = `${Helpers.addNewLine()}WHERE ${SQL.getRandomWhereCondition()}`;
      } else if (Helpers.getRandomInt(1, 10) <= 5) {
        whereCond = `${Helpers.addNewLine()}WHERE ${SQL.getRandomWhereCondition()}${SQL.getRandomOperator()}${SQL.getRandomWhereCondition()}`;
      }

      let groupByCond = "";
      if (Helpers.getRandomInt(1, 10) <= 5) {
        groupByCond = `${Helpers.addNewLine()}GROUP BY ${SQL.getRandomGroupByCondition(
          fillerLineQty
        )}`;
      } else;

      let orderByCond = "";
      if (Helpers.getRandomInt(1, 10) <= 5) {
        groupByCond = `${Helpers.addNewLine()}ORDER BY ${SQL.getRandomOrderByCondition(
          fillerLineQty
        )} ASC`;
      } else;

      lastLine = ";";
      return (
        firstLine +
        fillerLines.join(Helpers.addNewLine()) +
        fromStatement +
        whereCond +
        groupByCond +
        orderByCond +
        lastLine
      );
    case "swift":
      firstLine = `func ${Swift.getRandomFunctionName()} {${Helpers.addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 0; i < fillerLineQty; i++) {
        fillerLines.push(`   ${Swift.getRandomFillerLine()}`);
      }

      lastLine = `${Helpers.addNewLine()}}`;
      return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
    case "vba":
      firstLine = `${VBA.getRandomAccessModifier()} Function ${VBA.getRandomMethodName()}() As ${VBA.getRandomDataType()}${Helpers.addNewLine()}`.replace(
        "  ",
        " "
      );
      if (firstLine[0] === " ") firstLine = firstLine.slice(1);
      fillerLineQty = parseInt(lines, 10) - 3;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment("vba"));
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${VBA.getRandomFillerLine()}`);
      }

      lastLine = `${Helpers.addNewLine()}End Function`;

      return firstLine + fillerLines.join(`${Helpers.addNewLine()}`) + lastLine;
    default:
      return "lol";
  }
}

export default generateRandomCode;

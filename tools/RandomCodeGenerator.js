import { addNewLine, getRandomEntry, getRandomInt } from "./utils/helpers";

import COBOL from "./utils/cobol";
import Comments from "./utils/comments";
import CPlusPlus from "./utils/cplusplus";
import CSharp from "./utils/csharp";
import Css from "./utils/css";
import Docker from "./utils/docker";
import FSharp from "./utils/fsharp";
import Go from "./utils/go";
import Java from "./utils/java";
import JavaScript from "./utils/javascript";
import TypeScript from "./utils/typescript";
import Kotlin from "./utils/kotlin";
import PHP from "./utils/php";
import Python from "./utils/python";
import Powershell from "./utils/powershell";
import Rust from "./utils/rust";
import SQL from "./utils/sql";
import Swift from "./utils/swift";

export function generateRandomCode(language, lines) {
  let firstLine = "";
  let fillerLineQty = "";
  let fillerLines = [];
  let lastLine = "";
  const addComment = (Math.random() + 0.5) >> 0;
  let imports = "";
  let returnLine = "";
  // 3 lines will be dedicated to a for loop if lines > 7
  let includeForLoop = parseInt(lines, 10) > 7;

  switch (language) {
    case "cplusplus":
      firstLine = `${CPlusPlus.getRandomFunctionName()}() {${addNewLine()}`;
      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${CPlusPlus.getRandomFillerLine()}`);
      }

      lastLine = `${addNewLine()}}`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "css":
      firstLine = `.${Css.getRandomClassName()} {${addNewLine()}`;
      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        const lineOptions = [
          `    ${Css.getRandomUnitRule()};`,
          `    ${Css.getRandomColorRule()};`,
          `    ${Css.getRandomDisplayRule()};`,
          `    ${Css.getRandomZIndexRule()};`,
          `    ${Css.getRandomPositionRule()};`,
          `    ${Css.getRandomBorderStyle()};`,
          `    ${Css.getRandomTextAlign()};`,
          `    ${Css.getRandomListStyle()};`,
          `    ${Css.getRandomJustify()};`,
          `    ${Css.getRandomAlign()};`,
          `    ${Css.getRandomCursorStyle()};`,
          `    ${Css.getRandomFlexDirection()};`,
          `    ${Css.getRandomBackgroundPostition()};`,
          `    ${Css.getRandomBorderCollapse()};`,
          `    ${Css.getRandomBackgroundRepeat()};`,
          `    ${Css.getRandomBoxShadow()};`,
        ];

        fillerLines.push(getRandomEntry(lineOptions));
      }

      lastLine = `${addNewLine()}}`;
      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "csharp":
      firstLine = `${CSharp.getRandomAccessModifier()} ${CSharp.getRandomMethodKeyword()} void ${CSharp.getRandomMethodName()}()${addNewLine()}`.replace(
        "  ",
        " "
      );
      if (firstLine[0] === " ") firstLine = firstLine.slice(1);

      fillerLineQty = parseInt(lines, 10) - 3;

      fillerLines.push("{");

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${CSharp.getRandomFillerLine()}`);
      }

      lastLine = `${addNewLine()}}`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "docker":
      firstLine = Docker.randomPreamble();
      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`${Docker.getRandomFillerLine()}`);
      }
      lastLine = Docker.randomPostamble();

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "fsharp":
      firstLine = FSharp.randomPreamble();

      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${FSharp.getRandomFillerLine()}`);
      }

      lastLine = `${addNewLine()}    ()`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "go":
      // get a random amount of package imports.
      const importsToGet = Math.floor(lines / 5);
      // coin flip for adding a return statement or not
      const addReturnLine = Math.floor(Math.random() * 2);
      fillerLineQty =
        parseInt(lines, 10) - 2 - 2 - importsToGet - addReturnLine;
      let randomImports = [];

      //package name is mandatory, so let's always have this, and exclude it from the line count
      const pkgLine = `package ${Go.getRandomPackageName()}${addNewLine(2)}`;

      //set up random package import[s]
      let importLine = "";
      if (importsToGet >= 1) {
        for (let i = 1; i <= importsToGet; i++) {
          randomImports.push(`\t"${Go.getRandomImportName()}"${addNewLine()}`);
        }
        importLine = `import (${addNewLine()}\t\"fmt"${addNewLine()}${randomImports.join(
          ""
        )})${addNewLine(2)}`;
      } else {
        importLine = `import "fmt"${addNewLine(2)}`;
      }

      //set up a function
      firstLine = `func ${Go.getRandomFunctionName()} { ${addNewLine()}`;

      //add code to function
      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`${Go.getRandomFillerLine()}`);
      }

      if (addReturnLine === 1) {
        lastLine = `${addNewLine()}\treturn ${Go.getExistingVariable()}`;
      }

      lastLine += `${addNewLine()}}`;

      return (
        pkgLine +
        importLine +
        firstLine +
        fillerLines.join(addNewLine()) +
        lastLine
      );
    case "js":
      const firstLines = [
        (randomFunctionName) => {
          return `function ${randomFunctionName}() {${addNewLine()}`;
        },
        (randomFunctionName) => {
          return `const ${randomFunctionName} = () => {${addNewLine()}`;
        },
      ];

      firstLine = getRandomEntry(firstLines)(
        JavaScript.getRandomFunctionName()
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
        fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
        fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);

        // add 3 lines
        const forLoopLines = JavaScript.getRandomForLoopAsArray(); // return array

        fillerLines = [...fillerLines, ...forLoopLines];

        // add the rest
        for (let i = 6; i <= fillerLineQty; i++) {
          fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
        }
      } else {
        for (let i = 1; i <= fillerLineQty; i++) {
          fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
        }
      }

      fillerLines.push(JavaScript.getRandomReturn());

      lastLine = `${addNewLine()}}`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "ts":
      const firstTsLines = [
        (randomFunctionName) => {
          return `function ${randomFunctionName}(x: any, y: any): any {${addNewLine()}`;
        },
        (randomFunctionName) => {
          return `const ${randomFunctionName} = function (x: any, y: any): any {${addNewLine()}`;
        },
      ];

      firstLine = getRandomEntry(firstTsLines)(
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

      lastLine = `${addNewLine()}}`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "php":
      firstLine = `<?php ${addNewLine(2)}`;
      let namespaceLine = `${PHP.getRandomNamespace()}${addNewLine(2)}`;

      let classLine = `class ${PHP.getRandomClassName()} {${addNewLine()}`;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        classLine += `${Comments.getRandomComment()}${addNewLine()}`;
      }

      let functionLine = `    ${PHP.getRandomFunctionKeyword()} ${PHP.getRandomFunctionName()}(${PHP.getRandomParamtersRead()}) {${addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`        ${PHP.getRandomFillerLine()}`);
      }

      let endFunctionLine = `${addNewLine()}    }${addNewLine()}`;
      lastLine = `}`;

      return (
        firstLine +
        namespaceLine +
        classLine +
        functionLine +
        fillerLines.join(addNewLine()) +
        endFunctionLine +
        lastLine
      );
    case "powershell":
      firstLine = `function ${Powershell.getRandomFunctionName()} { ${addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        firstLine += `${Comments.getRandomComment(
          "powershell"
        )}${addNewLine()}`;
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Powershell.getRandomFillerLine()}`);
      }

      lastLine = `${addNewLine()}}`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "java":
      firstLine = `${Java.getRandomMethodSignature()}() {${addNewLine()}`;
      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Java.getRandomFillerLine()}`);
      }

      lastLine = `${addNewLine()}}`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "kotlin":
      firstLine = `${Kotlin.getRandomMethodSignature()} {${addNewLine()}`;
      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Kotlin.getRandomFillerLine()}`);
      }

      lastLine = `${addNewLine()}}`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "python":
      imports = `${Python.getRandomImport()}${addNewLine(2)}`;
      firstLine = `def ${Python.getRandomFunctionName()}():${addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`\t${Python.getRandomFillerLine()}`);
      }

      return imports + firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "cobol":
      firstLine = `PROCEDURE DIVISION.${addNewLine()}`;
      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`\t${COBOL.getRandomFillerLine()}`);
      }

      lastLine = `${addNewLine()}STOP RUN.`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "rust":
      firstLine = `fn ${Rust.getRandomFunctionName()}() -> ${Rust.getRandomType()} {${addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Rust.getRandomFillerLine()}`);
      }

      lastLine = `${addNewLine()}}`;

      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    case "sql":
      firstLine = "SELECT" + ` ${SQL.getRandomFieldName()}${addNewLine()}`;
      fillerLineQty = parseInt(lines, 10);

      //first loop is just for field names sorry
      for (let i = 1; i <= fillerLineQty; i++) {
        const lineOptions = [` ,${SQL.getRandomFieldName()}`];

        fillerLines.push(
          lineOptions[Math.floor(Math.random() * lineOptions.length)]
        );
      }
      let lineBreak;
      if (fillerLineQty > 1) {
        lineBreak = addNewLine();
      } else lineBreak = "";
      let fromStatement =
        lineBreak +
        "FROM" +
        ` ${SQL.getRandomSchemaName()}` +
        `.${SQL.getRandomTableName()}`;

      let whereCond = "";
      //this part is for the other functions like WHERE, GROUP BY etc.
      if (getRandomInt(1, 10) <= 3) {
        whereCond = `${addNewLine()}WHERE ${SQL.getRandomWhereCondition()}`;
      } else if (getRandomInt(1, 10) <= 5) {
        whereCond = `${addNewLine()}WHERE ${SQL.getRandomWhereCondition()}${SQL.getRandomOperator()}${SQL.getRandomWhereCondition()}`;
      }

      let groupByCond = "";
      if (getRandomInt(1, 10) <= 5) {
        groupByCond = `${addNewLine()}GROUP BY ${SQL.getRandomGroupByCondition(
          fillerLineQty
        )}`;
      } else;

      let orderByCond = "";
      if (getRandomInt(1, 10) <= 5) {
        groupByCond = `${addNewLine()}ORDER BY ${SQL.getRandomOrderByCondition(
          fillerLineQty
        )} ASC`;
      } else;

      lastLine = ";";
      return (
        firstLine +
        fillerLines.join(addNewLine()) +
        fromStatement +
        whereCond +
        groupByCond +
        orderByCond +
        lastLine
      );
    case "swift":
      firstLine = `func ${Swift.getRandomFunctionName()} {${addNewLine()}`;

      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 0; i < fillerLineQty; i++) {
        fillerLines.push(`   ${Swift.getRandomFillerLine()}`);
      }

      lastLine = `${addNewLine()}}`;
      return firstLine + fillerLines.join(addNewLine()) + lastLine;
    default:
      return "lol";
  }
}

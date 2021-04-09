import Comments from "./utils/comments";
import { addNewLine, getRandomEntry, getRandomInt } from "./utils/helpers";
import {
  COBOL,
  CPlusPlus,
  CSharp,
  Css,
  Docker,
  FSharp,
  Go,
  Java,
  JavaScript,
  Kotlin,
  PHP,
  Python,
  Powershell,
  Rust,
  SQL,
  Swift,
} from "./languages";

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
    case "cplusplus":
      return CPlusPlus.generateRandomCode(lines);
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
      const functionProperties = `${getRandomSingleCharacter()}: any, ${getRandomSingleCharacter()}: any`;

      const firstTsLines = [
        (randomFunctionName) => {
          return `function ${randomFunctionName}(${functionProperties}): any {${addNewLine()}`;
        },
        (randomFunctionName) => {
          return `const ${randomFunctionName} = function (${functionProperties}): any {${addNewLine()}`;
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

        fillerLines.push(getRandomEntry(lineOptions));
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

    case "vba":
      firstLine = `${VBA.getRandomAccessModifier()} Function ${VBA.getRandomMethodName()}() As ${VBA.getRandomDataType()}${addNewLine()}`.replace(
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

      lastLine = `${addNewLine()}End Function`;

      return firstLine + fillerLines.join(`${addNewLine()}`) + lastLine;

    default:
      return "lol";
  }
}

export default generateRandomCode;

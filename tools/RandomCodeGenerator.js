import { getRandomEntry, getRandomInt } from "./utils/helpers";

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
import Kotlin from "./utils/kotlin";
import PHP from "./utils/php";
import Python from "./utils/python";
import Powershell from "./utils/powershell";
import Rust from "./utils/rust";
import SQL from "./utils/sql";
import Swift from "./utils/swift";

export const Languages = {
  cplusplus: "C++",
  css: "CSS",
  cobol: "COBOL",
  csharp: "C#",
  fsharp: "F#",
  docker: "Docker",
  php: "PHP",
  java: "Java",
  js: "JavaScript",
  kotlin: "Kotlin",
  python: "Python",
  powershell: "Powershell",
  rust: "Rust",
  swift: "Swift",
};

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
      firstLine = `${CPlusPlus.getRandomFunctionName()}() {\n\r`;
      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${CPlusPlus.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "css":
      firstLine = `.${Css.getRandomClassName()} {\n\r`;
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
        ];

        fillerLines.push(getRandomEntry(lineOptions));
      }

      lastLine = "\n\r}";
      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "csharp":
      firstLine = `${CSharp.getRandomAccessModifier()} ${CSharp.getRandomMethodKeyword()} void ${CSharp.getRandomMethodName()}()\n\r`.replace(
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

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "docker":
      firstLine = Docker.randomPreamble();
      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`${Docker.getRandomFillerLine()}`);
      }
      lastLine = Docker.randomPostamble();

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "fsharp":
      firstLine = FSharp.randomPreamble();

      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${FSharp.getRandomFillerLine()}`);
      }

      lastLine = "\r\n    ()";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "go":
      // get a random amount of package imports.
      const importsToGet = Math.floor(lines / 5);
      // coin flip for adding a return statement or not
      const addReturnLine = Math.floor(Math.random() * 2);
      fillerLineQty = parseInt(lines, 10) - 2 - 2 - importsToGet - addReturnLine;
      let randomImports = [];

      //package name is mandatory, so let's always have this, and exclude it from the line count
      const pkgLine = `package ${Go.getRandomPackageName()}\n\n\r`;

      //set up random package import[s]
      let importLine = "";
      if (importsToGet >= 1) {
        for (let i = 1; i <= importsToGet; i++) {
          randomImports.push(`\t"${Go.getRandomImportName()}"\n\r`);
        }
        importLine = `import (\n\r\t\"fmt"\n${randomImports.join("")})\n\n\r`;
      } else {
        importLine = `import "fmt"\n\n\r`;
      }

      //set up a function
      firstLine = `func ${Go.getRandomFunctionName()} { \n\r`;

      //add code to function
      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`${Go.getRandomFillerLine()}`);
      }

      if (addReturnLine === 1) {
        lastLine = `\n\treturn ${Go.getExistingVariable()}`;
      }

      lastLine += `\n\r}`;

      return pkgLine + importLine + firstLine + fillerLines.join("\n\r") + lastLine;
    case "js":
      const firstLines = [
        (randomFunctionName) => {
          return `function ${randomFunctionName}() {\n\r`;
        },
        (randomFunctionName) => {
          return `const ${randomFunctionName} = () => {\n\r`;
        },
      ];

      firstLine = getRandomEntry(firstLines)(JavaScript.getRandomFunctionName());

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

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "php":
      firstLine = `<?php \r\n\r\n`;
      let namespaceLine = `${PHP.getRandomNamespace()}\n\r\n\r`;

      let classLine = `class ${PHP.getRandomClassName()} { \r\n`;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        classLine += `${Comments.getRandomComment()}\n\r`;
      }

      let functionLine = `    ${PHP.getRandomFunctionKeyword()} ${PHP.getRandomFunctionName()}(${PHP.getRandomParamtersRead()}) {\n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`        ${PHP.getRandomFillerLine()}`);
      }

      let endFunctionLine = `\n\r    }\n\r`;
      lastLine = `}`;

      return (
        firstLine +
        namespaceLine +
        classLine +
        functionLine +
        fillerLines.join("\n\r") +
        endFunctionLine +
        lastLine
      );
    case "powershell":
      firstLine = `function ${Powershell.getRandomFunctionName()} { \n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        firstLine += `${Comments.getRandomComment("powershell")}\n\r`;
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Powershell.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "java":
      firstLine = `${Java.getRandomMethodSignature()}() {\n\r`;
      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Java.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "kotlin":
      firstLine = `${Kotlin.getRandomMethodSignature()} {\n\r`;
      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Kotlin.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "python":
      imports = `${Python.getRandomImport()}\n\n`;
      firstLine = `def ${Python.getRandomFunctionName()}():\n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`\t${Python.getRandomFillerLine()}`);
      }

      return imports + firstLine + fillerLines.join("\n\r") + lastLine;
    case "cobol":
      firstLine = `PROCEDURE DIVISION.\n\r`;
      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`\t${COBOL.getRandomFillerLine()}`);
      }

      lastLine = "\n\rSTOP RUN.";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "rust":
      firstLine = `fn ${Rust.getRandomFunctionName()}() -> ${Rust.getRandomType()} {\n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Rust.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "sql":
      firstLine = "SELECT" + ` ${SQL.getRandomFieldName()}\n\r`;
      fillerLineQty = parseInt(lines, 10);

      //first loop is just for field names sorry
      for (let i = 1; i <= fillerLineQty; i++) {
        const lineOptions = [` ,${SQL.getRandomFieldName()}`];

        fillerLines.push(lineOptions[Math.floor(Math.random() * lineOptions.length)]);
      }
      let lineBreak;
      if (fillerLineQty > 1) {
        lineBreak = "\n\r";
      } else lineBreak = "";
      let fromStatement =
        lineBreak + "FROM" + ` ${SQL.getRandomSchemaName()}` + `.${SQL.getRandomTableName()}`;

      let whereCond = "";
      //this part is for the other functions like WHERE, GROUP BY etc.
      if (getRandomInt(1, 10) <= 3) {
        whereCond = `\n\rWHERE ${SQL.getRandomWhereCondition()}`;
      } else if (getRandomInt(1, 10) <= 5) {
        whereCond = `\n\rWHERE ${SQL.getRandomWhereCondition()}${SQL.getRandomOperator()}${SQL.getRandomWhereCondition()}`;
      }

      let groupByCond = "";
      if (getRandomInt(1, 10) <= 5) {
        groupByCond = `\n\rGROUP BY ${SQL.getRandomGroupByCondition(fillerLineQty)}`;
      } else;

      let orderByCond = "";
      if (getRandomInt(1, 10) <= 5) {
        groupByCond = `\n\rORDER BY ${SQL.getRandomOrderByCondition(fillerLineQty)} ASC`;
      } else;

      lastLine = ";";
      return (
        firstLine +
        fillerLines.join("\n\r") +
        fromStatement +
        whereCond +
        groupByCond +
        orderByCond +
        lastLine
      );
    case "swift":
      firstLine = `func ${Swift.getRandomFunctionName()} {\n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 0; i < fillerLineQty; i++) {
        fillerLines.push(`   ${Swift.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";
      return firstLine + fillerLines.join("\n\r") + lastLine;
    default:
      return "lol";
  }
}

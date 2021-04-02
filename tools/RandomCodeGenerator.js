import CSharp from "./utils/csharp";
import Css from "./utils/css";
import Java from "./utils/java";
import JavaScript from "./utils/javascript";
import Python from "./utils/python";
import PHP from "./utils/php";
import Powershell from "./utils/powershell";


export const Languages = {
  css: "CSS",
  csharp: "C#",
  php: "PHP",
  java: "Java",
  js: "JavaScript",
  python: "Python",
  powershell: "Powershell"
};

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function generateRandomCode(language, lines) {
  let firstLine = "";
  let fillerLineQty = "";
  let fillerLines = [];
  let lastLine = "";

  switch (language) {
    case "css":
      firstLine = `.${Css.getRandomClassName()} {\n\r`;
      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(
          `    ${Css.getRandomProp()}: ${getRandomInt(0, 500)}${Css.getRandomUnit()};`
        );
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
      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${CSharp.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "js":
      const firstLines = [
        (randomFunctionName) => {
          return `function ${randomFunctionName}() {\n\r`;
        },
        (randomFunctionName) => {
          return `const ${randomFunctionName} = () => {\n\r`;
        },
      ];

      firstLine = firstLines[getRandomInt(0, firstLines.length - 1)](
        JavaScript.getRandomFunctionName()
      );

      fillerLineQty = parseInt(lines, 10) - 2;

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "php":
      firstLine = `<?php \r\n\r\n`;
      let namespaceLine = `${PHP.getRandomNamespace()}\n\r\n\r`;

      let classLine = `class ${PHP.getRandomClassName()} { \r\n`;
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

        for(let i = 1; i <= fillerLineQty; i++) {
          fillerLines.push(`${Powershell.getRandomFillerLine()}`);
        }

        lastLine = "\n\r}";

        return firstLine + fillerLines.join("\n\r") + lastLine;
      case "java":
        firstLine = `${Java.getRandomMethodSignature()}() {\n\r`;
        fillerLineQty = parseInt(lines, 10) - 2;

        for (let i = 1; i <= fillerLineQty; i++) {
          fillerLines.push(`    ${Java.getRandomFillerLine()}`);
      }

        lastLine = "\n\r}";

        return firstLine + fillerLines.join("\n\r") + lastLine;
      case "python":
        firstLine = `def ${Python.getRandomFunctionName()}():\n\r`;

        fillerLineQty = parseInt(lines, 10) - 2;

        for (let i = 1; i <= fillerLineQty; i++) {
          fillerLines.push(`\t${Python.getRandomFillerLine()}`);
      }

        return firstLine + fillerLines.join("\n\r") + lastLine;
      default:
        return "lol";
  }
}

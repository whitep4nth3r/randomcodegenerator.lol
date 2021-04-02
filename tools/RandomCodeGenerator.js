
import Css from "./utils/css";
import Java from "./utils/java";
import JavaScript from "./utils/javascript";
import Python from "./utils/python";
import Comments from "./utils/comments";

export const Languages = {
  css: "CSS",
  java: "Java",
  js: "JavaScript",
  python: "Python",
};

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function generateRandomCode(language, lines, addComment) {
  let firstLine = "";
  let fillerLineQty = "";
  let fillerLines = [];
  let lastLine = "";

  switch (language) {
    case "css":
      firstLine = `.${Css.getRandomClassName()} {\n\r`;
      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(
          `    ${Css.getRandomProp()}: ${getRandomInt(0, 500)}${Css.getRandomUnit()};`
        );
      }

      lastLine = "\n\r}";
      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "js":
      firstLine = `function ${JavaScript.getRandomFunctionName()}() {\n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      if (addComment) {
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "java":
      firstLine = `${Java.getRandomMethodSignature()}() {\n\r`;
      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${Java.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "python":
      firstLine = `def ${Python.getRandomFunctionName()}():\n\r`;

      fillerLineQty = parseInt(lines, 10) - 2;

      if (addComment) {
        fillerLines.push(Comments.getRandomComment());
      }

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`\t${Python.getRandomFillerLine()}`);
      }

      return firstLine + fillerLines.join("\n\r") + lastLine;
    default:
      return "lol";
  }
}

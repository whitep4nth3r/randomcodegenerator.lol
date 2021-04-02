import Css from "./utils/css";
import JavaScript from "./utils/javascript";

export const Languages = {
  js: "JavaScript",
  css: "CSS",
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
    case "js":
      const firstLines = [
        (randomFunctionName) => { return `function ${randomFunctionName}() {\n\r` },
        (randomFunctionName) => { return `const ${randomFunctionName} = () => {\n\r` }
      ]
      
      firstLine = firstLines[getRandomInt(0, firstLines.length - 1)](JavaScript.getRandomFunctionName())

      fillerLineQty = parseInt(lines, 10) - 2;
      fillerLines = [];

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
      }

      lastLine = "\n\r}";

      return firstLine + fillerLines.join("\n\r") + lastLine;
    default:
      return "lol";
  }
}

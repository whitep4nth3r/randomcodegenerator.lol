import { Languages } from "@tools/Constants";
import Css from "@tools/utils/css";

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function generateRandomCode(language, lines) {
  switch (language) {
    case "css":
      const firstLine = `.${Css.getRandomClassName()} {\n\r`;
      const fillerLineQty = parseInt(lines, 10) - 2;
      const fillerLines = [];

      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(
          `    ${Css.getRandomProp()}: ${getRandomInt(0, 500)}${Css.getRandomUnit()};`
        );
      }

      const lastLine = "\n\r}";
      return firstLine + fillerLines.join("\n\r") + lastLine;
    case "js":
      return "test js";
    default:
      return "lol";
  }
}

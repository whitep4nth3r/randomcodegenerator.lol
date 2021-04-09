import JavaScript from "./javascript";

import {
  getRandomEntry,
  getRandomNoun,
  getRandomLogLine,
} from "../utils/helpers";

export default class TypeScript extends JavaScript {
  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "var"];

    return `${getRandomEntry(
      keyWords
    )} ${getRandomNoun()}: any = ${getRandomEntry(
      TypeScript.getRandomInitializationVars()
    )};`;
  }

  static getRandomFillerLine() {
    const options = [
      `console.${getRandomEntry(
        TypeScript.getRandomConsoleLevel()
      )}(${getRandomLogLine()});`,
      TypeScript.getRandomVariableDeclaration(),
      `${TypeScript.getRandomFunctionName()}();`,
    ];
    return getRandomEntry(options);
  }
}

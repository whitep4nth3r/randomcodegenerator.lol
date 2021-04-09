import JavaScript from "./javascript";

import {
  getRandomInt,
  getRandomEntry,
  getRandomNoun,
  getRandomLogLine,
} from "./helpers";

import {
  singleCharacters,
} from "../constants";

export default class TypeScript extends JavaScript {
  static getRandomProperties() {
    const start = getRandomInt(0, singleCharacters.length-1)
    const end = getRandomInt(start + 1, singleCharacters.length)

    return singleCharacters.slice(start, end)
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "var"];

    return `${getRandomEntry(keyWords)} ${getRandomNoun()}: any = ${getRandomEntry(
      TypeScript.getRandomInitializationVars()
    )};`;
  }

  static getRandomFillerLine() {
    const options = [
      `console.${getRandomEntry(TypeScript.getRandomConsoleLevel())}(${getRandomLogLine()});`,
      TypeScript.getRandomVariableDeclaration(),
      `${TypeScript.getRandomFunctionName()}();`,
    ];
    return getRandomEntry(options);
  }
}

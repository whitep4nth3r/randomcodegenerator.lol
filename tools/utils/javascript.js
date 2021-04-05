import {
  getRandomEntry,
  getRandomInt,
  getRandomNoun,
  getRandomNounCapitalized,
  getRandomVerb,
  getLogLines,
} from "./helpers";

export default class JavaScript {
  static getRandomFunctionName() {
    return `${getRandomVerb()}${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "var"];
    const options = ["[]", "this"];

    return `${getRandomEntry(keyWords)} ${getRandomNoun()} = ${getRandomEntry(options)};`;
  }

  static getRandomConsoleLog() {
    const options = getLogLines();
    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `console.log(${JavaScript.getRandomConsoleLog()});`,
      JavaScript.getRandomVariableDeclaration(),
      `${JavaScript.getRandomFunctionName()}();`,
    ];
    return getRandomEntry(options);
  }
}

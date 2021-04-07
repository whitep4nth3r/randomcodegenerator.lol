import {
  getRandomEntry,
  getRandomNoun,
  getRandomNounCapitalized,
  getRandomVerb,
  getRandomLogLine,
  getRandomSingleCharacter,
} from "./helpers";

export default class JavaScript {
  static getRandomInitializationVars() {
    return [
      "[]",
      "this",
      "self",
      "0",
      "1",
      "true",
      "false",
      "{}",
      "null",
      "undefined",
    ];
  }

  static getRandomFunctionName() {
    return `${getRandomVerb()}${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "var"];

    return `${getRandomEntry(keyWords)} ${getRandomNoun()} = ${getRandomEntry(
      JavaScript.getRandomInitializationVars()
    )};`;
  }

  static getRandomFillerLine() {
    const options = [
      `console.log(${getRandomLogLine()});`,
      JavaScript.getRandomVariableDeclaration(),
      `${JavaScript.getRandomFunctionName()}();`,
    ];
    return getRandomEntry(options);
  }

  static getRandomReturn() {
    return `    return ${getRandomEntry(
      JavaScript.getRandomInitializationVars()
    )};`;
  }

  static getRandomForLoopAsArray() {
    const randomChar = getRandomSingleCharacter();
    const randomNoun = getRandomNoun();

    return [
      `    for (let ${randomChar} = 0; ${randomChar} <= ${randomNoun}.length; ${randomChar}++) {`,
      `        ${JavaScript.getRandomFunctionName()}(${randomChar})`,
      "    };",
    ];
  }
}

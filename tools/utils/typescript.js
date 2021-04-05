import {
  getRandomEntry,
  getRandomInt,
  getRandomNoun,
  getRandomNounCapitalized,
  getRandomVerb,
} from "./helpers";

export default class TypeScript {
  static getRandomFunctionName() {
    return `${getRandomVerb()}${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "var"];
    const options = ["[]", "this"];

    return `${getRandomEntry(keyWords)} ${getRandomNoun()}: any = ${getRandomEntry(
      options
    )};`;
  }

  static getRandomConsoleLog() {
    const options = [
      '"Goodbye, world!"',
      '"test"',
      '"hello"',
      `"here ${getRandomInt(0, 100)}"`,
      '"should be here"',
      '"some error"',
      "[object Object]",
      '"undefined"',
      '"=== DEBUG ==="',
      '"to do"',
      '"asdf"',
      "NaN",
      '"FIRE"',
      '"schnitzel"',
      '"TODO: refactor this"',
    ];

    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `console.log(${TypeScript.getRandomConsoleLog()});`,
      TypeScript.getRandomVariableDeclaration(),
      `${TypeScript.getRandomFunctionName()}();`,
    ];
    return getRandomEntry(options);
  }
}

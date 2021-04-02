import { getRandomInt, getRandomItem, getRandomNoun, getRandomVerb } from "./random";

export default class JavaScript {
  static getRandomFunctionName() {
    const randomNoun = getRandomNoun();
    return `${getRandomVerb()}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "var"];
    const options = ["[]", "this"];

    return `${getRandomItem(keyWords)} ${
      getRandomNoun()
    } = ${getRandomItem(options)};`;
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

    return getRandomItem(options);
  }

  static getRandomFillerLine() {
    const options = [
      `console.log(${JavaScript.getRandomConsoleLog()});`,
      JavaScript.getRandomVariableDeclaration(),
      `${JavaScript.getRandomFunctionName()}();`
    ];
    return getRandomItem(options);
  }
}

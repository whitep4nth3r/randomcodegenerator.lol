import { getRandomInt, getRandomItem, getRandomNoun, getRandomVerb } from "./random";

export default class Python {
  static getRandomFunctionName() {
    const randomNoun = getRandomNoun();
    return `${getRandomVerb()}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomVariableDeclaration() {
    const options = ["[]", "this", "self", "x + 1"];

    return `${getRandomNoun()} = ${
      getRandomItem(options)
    }`;
  }

  static getRandomPrint() {
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
    const options = [`print(${Python.getRandomPrint()})`, Python.getRandomVariableDeclaration()];
    return getRandomItem(options);
  }
}

import { getRandomInt } from "../RandomCodeGenerator";
import { nouns, verbs } from "./words";

export default class Python {
  static getRandomFunctionName() {
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${verbs[Math.floor(Math.random() * verbs.length)]}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomVariableDeclaration() {
    const options = ["[]", "this", "self", "x + 1"];

    return `${nouns[Math.floor(Math.random() * nouns.length)]} = ${
      options[Math.floor(Math.random() * options.length)]
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

    return options[Math.floor(Math.random() * options.length)];
  }

  static getRandomFillerLine() {
    const options = [`print(${Python.getRandomPrint()})`, Python.getRandomVariableDeclaration()];
    return options[Math.floor(Math.random() * options.length)];
  }
}

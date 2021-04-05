import {
  getRandomEntry,
  getRandomInt,
  getRandomNoun,
  getRandomVerb,
} from "./helpers";

export default class Python {
  static getRandomImport() {
    return `import ${getRandomNoun()}`;
  }

  static getRandomFunctionName() {
    return `${getRandomVerb()}_${getRandomNoun()}`;
  }

  static getRandomVariableDeclaration() {
    const options = ["[]", "this", "self", "x + 1"];

    return `${getRandomNoun()} = ${getRandomEntry(options)}`;
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

    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `print(${Python.getRandomPrint()})`,
      Python.getRandomVariableDeclaration(),
    ];
    return getRandomEntry(options);
  }
}

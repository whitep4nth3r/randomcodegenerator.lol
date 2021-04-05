import { getRandomEntry, getRandomNoun, getRandomVerb, getLogLines } from "./helpers";

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
    const options = getLogLines();

    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [`print(${Python.getRandomPrint()})`, Python.getRandomVariableDeclaration()];
    return getRandomEntry(options);
  }
}

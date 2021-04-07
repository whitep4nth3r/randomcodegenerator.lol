import {
  getRandomEntry,
  getRandomNoun,
  getRandomVerb,
  getRandomLogLine,
} from "../utils/helpers";

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

  static getRandomFillerLine() {
    const options = [
      `print(${getRandomLogLine()})`,
      Python.getRandomVariableDeclaration(),
    ];
    return getRandomEntry(options);
  }
}

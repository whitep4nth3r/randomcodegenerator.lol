import {
  addNewLine,
  getRandomEntry,
  getRandomNoun,
  getRandomNounCapitalized,
  getRandomVerb,
  getRandomLogLine,
  getIndentation,
} from "../utils/helpers";

export default class CPlusPlus {
  static getRandomFunctionName() {
    const keyWords = ["int", "string", "double", "char", "bool"];

    return `${getRandomEntry(
      keyWords
    )} ${getRandomVerb()}${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["int", "string", "double", "char", "bool"];
    const options = ["[]", "this"];

    return `${getRandomEntry(keyWords)} ${getRandomNoun()} = ${getRandomEntry(
      options
    )};`;
  }

  static getRandomMethodKeyword() {
    const options = ["abstract", "virtual", "", "override", "static"];

    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `clog << ${getRandomEntry(getRandomLogLine())};`,
      CPlusPlus.getRandomVariableDeclaration(),
      `${CPlusPlus.getRandomFunctionName()}();`,
    ];
    return getRandomEntry(options);
  }

  static generateRandomCode(lines) {
    const firstLine = `${CPlusPlus.getRandomFunctionName()}() {${addNewLine()}`;
    const fillerLineQty = parseInt(lines, 10) - 2;
    const fillerLines = Array(fillerLineQty)
      .fill()
      .map((l) => `${getIndentation(1)}${CPlusPlus.getRandomFillerLine()}`);
    const lastLine = `${addNewLine()}}`;
    return firstLine + fillerLines.join(addNewLine()) + lastLine;
  }
}

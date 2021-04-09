import { Helpers } from "../utils";

export default class CPlusPlus {
  static getRandomFunctionName() {
    const keyWords = ["int", "string", "double", "char", "bool"];

    return `${Helpers.getRandomEntry(
      keyWords
    )} ${Helpers.getRandomVerb()}${Helpers.getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["int", "string", "double", "char", "bool"];
    const options = ["[]", "this"];

    return `${Helpers.getRandomEntry(
      keyWords
    )} ${Helpers.getRandomNoun()} = ${Helpers.getRandomEntry(options)};`;
  }

  static getRandomMethodKeyword() {
    const options = ["abstract", "virtual", "", "override", "static"];

    return Helpers.getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `clog << ${Helpers.getRandomEntry(Helpers.getRandomLogLine())};`,
      CPlusPlus.getRandomVariableDeclaration(),
      `${CPlusPlus.getRandomFunctionName()}();`,
    ];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines) {
    const firstLine = `${CPlusPlus.getRandomFunctionName()}() {${Helpers.addNewLine()}`;
    const fillerLineQty = parseInt(lines, 10) - 2;
    const fillerLines = Array(fillerLineQty)
      .fill()
      .map(
        (l) => `${Helpers.getIndentation(1)}${CPlusPlus.getRandomFillerLine()}`
      );
    const lastLine = `${Helpers.addNewLine()}}`;
    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

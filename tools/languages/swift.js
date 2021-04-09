import { Helpers } from "../utils";
import { logs } from "../constants";

export default class Swift {
  static getRandomInitializationVars() {
    return [
      "self",
      "0",
      "1",
      "true",
      "false",
      "nil",
      '"💩"',
      '"💻"',
      '"🍎"',
      '"🙀"',
      '"🐶"',
    ];
  }

  static getRandomFunctionName() {
    return `${Helpers.getRandomVerb()}${Helpers.getRandomNounCapitalized()}()`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "var"];

    return `${Helpers.getRandomEntry(
      keyWords
    )} ${Helpers.getRandomNoun()} = ${Helpers.getRandomEntry(
      Swift.getRandomInitializationVars()
    )}`;
  }

  static getRandomPrintCall() {
    return `print(${Helpers.getRandomEntry(logs)})`;
  }

  static getRandomFillerLine() {
    const options = [
      Swift.getRandomVariableDeclaration(),
      Swift.getRandomPrintCall(),
      Swift.getRandomFunctionName(),
    ];

    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines) {
    const firstLine = `func ${Swift.getRandomFunctionName()} {${Helpers.addNewLine()}`;
    let fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    for (let i = 0; i < fillerLineQty; i++) {
      fillerLines.push(`   ${Swift.getRandomFillerLine()}`);
    }

    const lastLine = `${Helpers.addNewLine()}}`;
    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

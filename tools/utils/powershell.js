import {
  getRandomEntry,
  getRandomNounCapitalized,
  getRandomVerbCapitalized,
  getRandomLogLine,
} from "./helpers";

export default class Powershell {
  static getRandomFunctionName() {
    return `${getRandomVerbCapitalized()}-${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const options = ["[]", "this"];

    return `$${getRandomNounCapitalized()} = ${getRandomEntry(options)};`;
  }

  static getRandomFillerLine() {
    const options = [
      `Write-Host ${getRandomLogLine()};`,
      Powershell.getRandomVariableDeclaration(),
    ];
    return getRandomEntry(options);
  }
}

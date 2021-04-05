import {
  getRandomEntry,
  getRandomNounCapitalized,
  getRandomVerbCapitalized,
  getLogLines,
} from "./helpers";

export default class Powershell {
  static getRandomFunctionName() {
    return `${getRandomVerbCapitalized()}-${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const options = ["[]", "this"];

    return `$${getRandomNounCapitalized()} = ${getRandomEntry(options)};`;
  }

  static getRandomWriteHost() {
    const options = getLogLines();

    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `Write-Host ${Powershell.getRandomWriteHost()};`,
      Powershell.getRandomVariableDeclaration(),
    ];
    return getRandomEntry(options);
  }
}

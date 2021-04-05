import {
  getRandomEntry,
  getRandomInt,
  getRandomNounCapitalized,
  getRandomVerbCapitalized,
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
      `Write-Host ${Powershell.getRandomWriteHost()};`,
      Powershell.getRandomVariableDeclaration(),
    ];
    return getRandomEntry(options);
  }
}

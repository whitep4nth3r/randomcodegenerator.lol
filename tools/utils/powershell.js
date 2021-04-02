import { getRandomInt } from "../RandomCodeGenerator";
import { nouns, verbs } from "./words";

export default class Powershell {
  static getRandomFunctionName() {
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

    return `${randomVerb.charAt(0).toUpperCase() + randomVerb.slice(1)}-${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomVariableDeclaration() {
    const options = ["[]", "this"];

    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `$${randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)} = ${
      options[Math.floor(Math.random() * options.length)]
    };`;
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

    return options[Math.floor(Math.random() * options.length)];
  }

  static getRandomFillerLine() {
    const options = [
      `Write-Host ${Powershell.getRandomWriteHost()};`,
      Powershell.getRandomVariableDeclaration(),
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}

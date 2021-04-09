import { Comments, Helpers } from "../utils";

export default class Powershell {
  static getRandomFunctionName() {
    return `${Helpers.getRandomVerbCapitalized()}-${Helpers.getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const options = ["[]", "this"];

    return `$${Helpers.getRandomNounCapitalized()} = ${Helpers.getRandomEntry(
      options
    )};`;
  }

  static getRandomFillerLine() {
    const options = [
      `Write-Host ${Helpers.getRandomLogLine()};`,
      Powershell.getRandomVariableDeclaration(),
    ];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines, addComment) {
    let firstLine = `function ${Powershell.getRandomFunctionName()} { ${Helpers.addNewLine()}`;
    let fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    if (addComment) {
      fillerLineQty = fillerLineQty - 1;
      firstLine += `${Comments.getRandomComment(
        "powershell"
      )}${Helpers.addNewLine()}`;
    }

    for (let i = 1; i <= fillerLineQty; i++) {
      fillerLines.push(`    ${Powershell.getRandomFillerLine()}`);
    }

    const lastLine = `${Helpers.addNewLine()}}`;

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

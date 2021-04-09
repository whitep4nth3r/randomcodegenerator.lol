import { Comments, Helpers } from "../utils";

export default class Python {
  static getRandomImport() {
    return `import ${Helpers.getRandomNoun()}`;
  }

  static getRandomFunctionName() {
    return `${Helpers.getRandomVerb()}_${Helpers.getRandomNoun()}`;
  }

  static getRandomVariableDeclaration() {
    const options = ["[]", "this", "self", "x + 1"];

    return `${Helpers.getRandomNoun()} = ${Helpers.getRandomEntry(options)}`;
  }

  static getRandomFillerLine() {
    const options = [
      `print(${Helpers.getRandomLogLine()})`,
      Python.getRandomVariableDeclaration(),
    ];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines, addComment) {
    let imports = `${Python.getRandomImport()}${Helpers.addNewLine(2)}`;
    let firstLine = `def ${Python.getRandomFunctionName()}():${Helpers.addNewLine()}`;

    let fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    if (addComment) {
      fillerLineQty = fillerLineQty - 1;
      fillerLines.push(Comments.getRandomComment());
    }

    for (let i = 1; i <= fillerLineQty; i++) {
      fillerLines.push(`\t${Python.getRandomFillerLine()}`);
    }

    return imports + firstLine + fillerLines.join(Helpers.addNewLine());
  }
}

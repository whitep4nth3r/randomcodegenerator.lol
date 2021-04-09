import { Comments, Helpers } from "../utils";

export default class CSharp {
  static getRandomMethodName() {
    return `${Helpers.getRandomVerbCapitalized()}${Helpers.getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["int", "string", "double", "float", "decimal", "bool"];

    const keyWord = Helpers.getRandomEntry(keyWords);
    return `${keyWord} ${Helpers.getRandomNoun()};`;
  }

  static getRandomNewVariableDeclaration() {
    const keyWords = [
      "ArrayList",
      "List<string>",
      "HashTable",
      "Dictionary<int, string>",
      "Queue",
      "StringBuilder",
    ];

    const keyWord = Helpers.getRandomEntry(keyWords);
    return `${keyWord} ${Helpers.getRandomNoun()} = new ${keyWord}();`;
  }

  static getRandomMethodKeyword() {
    const options = ["abstract", "virtual", "", "override", "static"];

    return Helpers.getRandomEntry(options);
  }

  static getRandomAccessModifier() {
    const options = ["public", "private", "", "protected", `internal`];

    return Helpers.getRandomEntry(options);
  }

  static getRandomMethodCall() {
    return `${this.getRandomMethodName()}();`;
  }

  static getRandomFillerLine() {
    const options = [
      `Debug.WriteLine(${Helpers.getRandomLogLine()});`,
      CSharp.getRandomVariableDeclaration(),
      CSharp.getRandomNewVariableDeclaration(),
      CSharp.getRandomMethodCall(),
    ];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines, addComment) {
    let firstLine = `${CSharp.getRandomAccessModifier()} ${CSharp.getRandomMethodKeyword()} void ${CSharp.getRandomMethodName()}()${Helpers.addNewLine()}`.replace(
      "  ",
      " "
    );
    if (firstLine[0] === " ") firstLine = firstLine.slice(1);
    let fillerLines = [];
    let fillerLineQty = parseInt(lines, 10) - 3;

    fillerLines.push("{");

    if (addComment) {
      fillerLineQty = fillerLineQty - 1;
      fillerLines.push(Comments.getRandomComment());
    }

    fillerLines = fillerLines.concat(
      Array(fillerLineQty)
        .fill()
        .map(
          (l) => `${Helpers.getIndentation(2)}${CSharp.getRandomFillerLine()}`
        )
    );

    const lastLine = `${Helpers.addNewLine()}}`;

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

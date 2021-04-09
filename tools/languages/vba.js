import { Comments, Helpers } from "../utils";

export default class VBA {
  static getRandomMethodName() {
    return `${Helpers.getRandomVerbCapitalized()}${Helpers.getRandomNounCapitalized()}`;
  }
  static getRandomFunctionName() {
    return `${Helpers.getRandomVerbCapitalized()}${Helpers.getRandomNounCapitalized()}`;
  }

  static getRandomDataType() {
    const keyWords = [
      "Integer",
      "Long",
      "String",
      "Double",
      "Single",
      "Date",
      "Boolean",
      "Excel.Application",
      "Access.Application",
      "Word.Application",
      "DAO.Recordset",
      "Object",
      "DAO.Database",
      "Variant",
    ];

    var keyWord = Helpers.getRandomEntry(keyWords);
    return `${keyWord}`;
  }

  static getRandomVariableDeclaration() {
    var keyWord = `${VBA.getRandomDataType()}`;
    const variableName = Helpers.getRandomNoun();
    return `Dim ${variableName} As ${keyWord} ${Helpers.addNewLine()}    ${variableName} = ${Helpers.getRandomInt(
      0,
      99999
    )}`;
  }

  static getRandomFillerLine() {
    const options = [
      `Print ${Helpers.getRandomLogLine()}`,
      VBA.getRandomVariableDeclaration(),
      VBA.getRandomNewVariableDeclaration(),
      VBA.getRandomMethodCall(),
      VBA.getRandomForLoopAsArray(),
      VBA.getRandomIfBlock(),
      `On Error Resume Next 'DON'T ever do this! `,
    ];
    return Helpers.getRandomEntry(options);
  }

  static getRandomIfBlock() {
    return `If ${Helpers.getRandomNounCapitalized()} > ${Helpers.getRandomInt(
      1,
      8765
    )} Then${Helpers.addNewLine()}        ${VBA.getRandomFunctionName()}(${Helpers.getRandomInt(
      5,
      99
    )})${Helpers.addNewLine()}    End If`;
  }
  static getRandomNewVariableDeclaration() {
    const keyWords = ["Dim", "Static"];

    var keyWord = Helpers.getRandomEntry(keyWords);
    return `${keyWord} ${Helpers.getRandomNoun()} As ${VBA.getRandomDataType()}`;
  }

  static getRandomMethodCall() {
    return `${this.getRandomMethodName()}( ${Helpers.getRandomNoun()} )`;
  }

  static getRandomAccessModifier() {
    const options = ["Public", "Private", ""];

    return Helpers.getRandomEntry(options);
  }
  static getRandomForLoopAsArray() {
    const randomChar = Helpers.getRandomSingleCharacter();

    return `For ${randomChar} = 0 to ${Helpers.getRandomInt(
      1,
      4000
    )}${Helpers.addNewLine()}        ${VBA.getRandomFunctionName()}(${randomChar})${Helpers.addNewLine()}    Next`;
  }

  static generateRandomCode(lines, addComment) {
    let firstLine = `${VBA.getRandomAccessModifier()} Function ${VBA.getRandomMethodName()}() As ${VBA.getRandomDataType()}${Helpers.addNewLine()}`.replace(
      "  ",
      " "
    );
    if (firstLine[0] === " ") firstLine = firstLine.slice(1);
    let fillerLineQty = parseInt(lines, 10) - 3;
    let fillerLines = [];

    if (addComment) {
      fillerLineQty = fillerLineQty - 1;
      fillerLines.push(Comments.getRandomComment("vba"));
    }

    for (let i = 1; i <= fillerLineQty; i++) {
      fillerLines.push(`    ${VBA.getRandomFillerLine()}`);
    }

    const lastLine = `${Helpers.addNewLine()}End Function`;

    return firstLine + fillerLines.join(`${Helpers.addNewLine()}`) + lastLine;
  }
}

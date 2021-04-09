import { Helpers } from "../utils";

export default class FSharp {
  static getRandomValue() {
    const values = [
      "[1;2;3]",
      "()",
      "123",
      '"HELLO WORLD!"',
      "3.14",
      "123456789012345678901234567890123456I",
    ];
    return Helpers.getRandomEntry(values);
  }

  static getRandomVariableName() {
    const options = [
      `\`\`${Helpers.getRandomVerb()} ${Helpers.getRandomNoun()}\`\``,
      `${Helpers.getRandomNoun()}`,
    ];
    return Helpers.getRandomEntry(options);
  }

  static getRandomVariableDeclaration() {
    const name = FSharp.getRandomVariableName();
    const value = FSharp.getRandomValue();
    return `let ${name} = ${value}`;
  }

  static getRandomMethodKeyword() {
    const options = ["inline", "rec"];
    return Helpers.getRandomEntry(options);
  }

  static getRandomMethodCall() {
    const options = [
      `let ${FSharp.getRandomVariableName()} = ${FSharp.getRandomVariableName()} ${FSharp.getRandomValue()} ${FSharp.getRandomValue()}`,
      `ignore <| ${FSharp.getRandomVariableName()} ${FSharp.getRandomValue()}`,
      `let ${FSharp.getRandomVariableName()} = ${FSharp.getRandomVariableName()} ${FSharp.getRandomValue()}`,
      `if input < 0 then failwithf "Ooops: %A" ${FSharp.getRandomValue()}`,
      `printfn "DEBUG: This should never happen: %A" ${FSharp.getRandomValue()}`,
    ];
    return Helpers.getRandomEntry(options);
  }

  static getRandomComment() {
    const options = [
      `// TODO: ${Helpers.getRandomVerb()} ${Helpers.getRandomNoun()}`,
    ];
    return Helpers.getRandomEntry(options);
  }

  static randomPreamble() {
    return `let ${FSharp.getRandomMethodKeyword()} ${FSharp.getRandomVariableName()} input =${Helpers.addNewLine()}`;
  }

  static getRandomFillerLine() {
    const options = [
      FSharp.getRandomComment(),
      FSharp.getRandomVariableDeclaration(),
      FSharp.getRandomMethodCall(),
    ];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines) {
    const firstLine = FSharp.randomPreamble();

    const fillerLineQty = parseInt(lines, 10) - 2;

    const fillerLines = Array(fillerLineQty)
      .fill()
      .map(
        (l) => `${Helpers.getIndentation(2)}${FSharp.getRandomFillerLine()}`
      );

    const lastLine = `${Helpers.addNewLine()}    ()`;

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

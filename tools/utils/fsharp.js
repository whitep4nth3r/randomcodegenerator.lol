import {
  addNewLine,
  getRandomEntry,
  getRandomNoun,
  getRandomVerb,
} from "./helpers";

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
    return getRandomEntry(values);
  }

  static getRandomVariableName() {
    const options = [`\`\`${getRandomVerb()} ${getRandomNoun()}\`\``, `${getRandomNoun()}`];
    return getRandomEntry(options);
  }

  static getRandomVariableDeclaration() {
    const name = FSharp.getRandomVariableName();
    const value = FSharp.getRandomValue();
    return `let ${name} = ${value}`;
  }

  static getRandomMethodKeyword() {
    const options = ["inline", "rec"];
    return getRandomEntry(options);
  }

  static getRandomMethodCall() {
    const options = [
      `let ${FSharp.getRandomVariableName()} = ${FSharp.getRandomVariableName()} ${FSharp.getRandomValue()} ${FSharp.getRandomValue()}`,
      `ignore <| ${FSharp.getRandomVariableName()} ${FSharp.getRandomValue()}`,
      `let ${FSharp.getRandomVariableName()} = ${FSharp.getRandomVariableName()} ${FSharp.getRandomValue()}`,
      `if input < 0 then failwithf "Ooops: %A" ${FSharp.getRandomValue()}`,
      `printfn "DEBUG: This should never happen: %A" ${FSharp.getRandomValue()}`,
    ];
    return getRandomEntry(options);
  }

  static getRandomComment() {
    const options = [`// TODO: ${getRandomVerb()} ${getRandomNoun()}`];
    return getRandomEntry(options);
  }

  static randomPreamble() {
    return `let ${FSharp.getRandomMethodKeyword()} ${FSharp.getRandomVariableName()} input =${addNewLine()}`;
  }

  static getRandomFillerLine() {
    const options = [
      FSharp.getRandomComment(),
      FSharp.getRandomVariableDeclaration(),
      FSharp.getRandomMethodCall(),
    ];
    return getRandomEntry(options);
  }
}

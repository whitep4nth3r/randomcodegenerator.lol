import { Helpers } from "../utils";

export default class Rust {
  static getRandomFunctionName() {
    return `${Helpers.getRandomVerb()}_${Helpers.getRandomNoun()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "let mut"];
    const options = [
      `${Rust.getRandomFunctionName()}().expect(${Helpers.getRandomLogLine()})`,
      `${Rust.getRandomFunctionName()}()`,
    ];

    return `${Helpers.getRandomEntry(
      keyWords
    )} ${Helpers.getRandomNoun()} = ${Helpers.getRandomEntry(options)};`;
  }

  static getRandomFillerLine() {
    const options = [
      `printf!("{}", ${Helpers.getRandomLogLine()});`,
      Rust.getRandomVariableDeclaration(),
      `${Rust.getRandomFunctionName()}();`,
    ];
    return Helpers.getRandomEntry(options);
  }

  static getRandomType() {
    const types = [
      "String",
      "&str",
      "u8",
      "u16",
      "u32",
      "u64",
      "usize",
      "i8",
      "i16",
      "i32",
      "i64",
      "isize",
    ];
    return Helpers.getRandomEntry(types);
  }

  static generateRandomCode(lines) {
    const firstLine = `fn ${Rust.getRandomFunctionName()}() -> ${Rust.getRandomType()} {${Helpers.addNewLine()}`;
    let fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    for (let i = 1; i <= fillerLineQty; i++) {
      fillerLines.push(`    ${Rust.getRandomFillerLine()}`);
    }

    const lastLine = `${Helpers.addNewLine()}}`;

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

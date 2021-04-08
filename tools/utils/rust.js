import { getRandomEntry, getRandomNoun, getRandomVerb, getRandomLogLine } from "./helpers";

export default class Rust {
  static getRandomFunctionName() {
    return `${getRandomVerb()}_${getRandomNoun()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "let mut"];
    const options = [
      `${Rust.getRandomFunctionName()}().expect(${getRandomLogLine()})`,
      `${Rust.getRandomFunctionName()}()`,
    ];

    return `${getRandomEntry(keyWords)} ${getRandomNoun()} = ${getRandomEntry(options)};`;
  }

  static getRandomFillerLine() {
    const options = [
      `printf!("{}", ${getRandomLogLine()});`,
      Rust.getRandomVariableDeclaration(),
      `${Rust.getRandomFunctionName()}();`,
    ];
    return getRandomEntry(options);
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
    return getRandomEntry(types);
  }
}

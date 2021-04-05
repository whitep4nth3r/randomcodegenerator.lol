import {
  getRandomEntry,
  getRandomInt,
  getRandomNoun,
  getRandomNounCapitalized,
  getRandomVerbCapitalized,
} from "./helpers";

export default class CSharp {
  static getRandomMethodName() {
    return `${getRandomVerbCapitalized()}${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["int", "string", "double", "float", "decimal", "bool"];

    var keyWord = getRandomEntry(keyWords);
    return `${keyWord} ${getRandomNoun()};`;
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

    var keyWord = getRandomEntry(keyWords);
    return `${keyWord} ${getRandomNoun()} = new ${keyWord}();`;
  }

  static getRandomMethodKeyword() {
    const options = ["abstract", "virtual", "", "override", "static"];

    return getRandomEntry(options);
  }

  static getRandomAccessModifier() {
    const options = ["public", "private", "", "protected", `internal`];

    return getRandomEntry(options);
  }

  static getRandomDebugWriteLine() {
    const options = [
      '"Goodbye, world!"',
      '"test"',
      '"hello"',
      `"here ${getRandomInt(0, 100)}"`,
      '"should be here"',
      '"here be dragons"',
      '"some error"',
      '"Would expect null"',
      '"=== DEBUG ==="',
      '"to do"',
      '"asdf"',
      '"FIRE"',
      '"schnitzel"',
      '"Marlon Webb says WATERMELON!"',
      '"TODO: refactor this"',
    ];

    return getRandomEntry(options);
  }

  static getRandomMethodCall() {
    return `${this.getRandomMethodName()}();`;
  }

  static getRandomFillerLine() {
    const options = [
      `Debug.WriteLine(${CSharp.getRandomDebugWriteLine()});`,
      CSharp.getRandomVariableDeclaration(),
      CSharp.getRandomNewVariableDeclaration(),
      CSharp.getRandomMethodCall(),
    ];
    return getRandomEntry(options);
  }
}

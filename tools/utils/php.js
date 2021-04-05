import {
  getRandomEntry,
  getRandomInt,
  getRandomNoun,
  getRandomNounCapitalized,
  getRandomVerb,
  getRandomVerbCapitalized,
} from "./helpers";

export default class PHP {
  static getRandomNamespace() {
    return `namespace ${getRandomNounCapitalized()}\\${getRandomNounCapitalized()};`;
  }

  static getRandomClassName() {
    return `${getRandomNounCapitalized()}`;
  }

  static getRandomFunctionKeyword() {
    const starters = ["public", "public static", "private", "protected"];

    return `${getRandomEntry(starters)} function`;
  }

  static getRandomFunctionName() {
    return `${getRandomVerb()}${getRandomVerbCapitalized()}`;
  }

  static getRandomParamtersSet() {
    const paramaters = [
      "",
      `'${getRandomNoun()}'`,
      `'${getRandomNoun()}', '${getRandomNoun()}'`,
    ];
    return `${getRandomEntry(paramaters)}`;
  }

  static getRandomParamtersRead() {
    const paramaters = [
      "",
      `$${getRandomNoun()}`,
      `$${getRandomNoun()}, $${getRandomNoun()}`,
    ];
    return getRandomEntry(paramaters);
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["$"];
    const options = [
      `[${PHP.getRandomParamtersSet()}]`,
      "array()",
      `array(${PHP.getRandomParamtersSet()})`,
      `$this->${getRandomVerb()}`,
      `$this->${getRandomVerb()}(${PHP.getRandomParamtersSet()})`,
      `"${getRandomVerb()}"`,
    ];

    return `${getRandomEntry(keyWords)}${getRandomNoun()} = ${getRandomEntry(
      options
    )};`;
  }

  static getRandomConsoleLog() {
    const options = [
      '"Goodbye, world!"',
      '"test"',
      '"hello"',
      `"here ${getRandomInt(0, 100)}"`,
      '"should be here"',
      '"some error"',
      ,
      '"undefined"',
      '"=== DEBUG ==="',
      '"to do"',
      '"asdf"',
      '"FIRE"',
      '"schnitzel"',
      '"TODO: refactor this"',
    ];

    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `var_dump(${PHP.getRandomConsoleLog()}); die();`,
      PHP.getRandomVariableDeclaration(),
    ];
    return getRandomEntry(options);
  }
}

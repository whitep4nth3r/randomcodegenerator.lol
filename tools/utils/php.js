import { getRandomInt, getRandomItem, getRandomNoun, getRandomVerb } from "./random";

export default class PHP {
  static getRandomNamespace() {
    const lowerRandomNoun = getRandomNoun(),
      lowerRandomNounTwo = getRandomNoun(),
      randomNoun =
        lowerRandomNoun.charAt(0).toUpperCase() + lowerRandomNoun.substr(1).toLowerCase(),
      randomNounTwo =
        lowerRandomNounTwo.charAt(0).toUpperCase() + lowerRandomNounTwo.substr(1).toLowerCase();

    return `namespace ${randomNoun}\\${randomNounTwo};`;
  }

  static getRandomClassName() {
    const lowerRandomNoun = getRandomNoun(),
      randomNoun =
        lowerRandomNoun.charAt(0).toUpperCase() + lowerRandomNoun.substr(1).toLowerCase();

    return `${randomNoun}`;
  }

  static getRandomFunctionKeyword() {
    const randomStarter = ["public", "public static", "private", "protected"];
    return `${getRandomItem(randomStarter)} function`;
  }

  static getRandomFunctionName() {
    const randomNoun = getRandomNoun();
    return `${getRandomVerb()}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomParametersSet() {
    const paramaters = [
      "",
      `'${getRandomNoun()}'`,
      `'${getRandomNoun()}', '${
        getRandomNoun()
      }'`,
    ];
    return `${paramaters[Math.floor(Math.random() * paramaters.length)]}`;
  }

  static getRandomParametersRead() {
    const paramaters = [
      "",
      `$${getRandomNoun()}`,
      `$${getRandomNoun()}, $${
        getRandomNoun()
      }`,
    ];
    return paramaters[Math.floor(Math.random() * paramaters.length)];
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["$"];
    const options = [
      `[${PHP.getRandomParametersSet()}]`,
      "array()",
      `array(${PHP.getRandomParametersSet()})`,
      `$this->${getRandomVerb()}`,
      `$this->${getRandomVerb()}(${PHP.getRandomParametersSet()})`,
      `"${getRandomVerb()}"`,
    ];

    return `${getRandomItem(keyWords)}${
      getRandomNoun()
    } = ${getRandomItem(options)};`;
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

    return getRandomItem(options);
  }

  static getRandomFillerLine() {
    const options = [
      `var_dump(${PHP.getRandomConsoleLog()}); die();`,
      PHP.getRandomVariableDeclaration(),
    ];
    return getRandomItem(options);
  }
}

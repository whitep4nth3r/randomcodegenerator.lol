import { getRandomInt, getRandomNoun, getRandomVerb } from "./random";
import PHP from "./php";

export default class Elixir {
  static getRandomModuleName() {
    return PHP.getRandomNamespace().replace('\\', '.');
  }

  static getRandomFunctionKeyword() {
    return getRandomItem(["def", "defp"]);
  }

  static getRandomFunctionName() {
    const randomNoun = getRandomNoun();
    return `${getRandomVerb()}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomParametersSet() {
    const parameters = [
      "",
      `'${getRandomNoun()}'`,
      `'${getRandomNoun()}', '${
        getRandomNoun()
      }'`,
    ];
    return `${getRandomItem(parameters)}`;
  }

  static getRandomParametersRead() {
    const parameters = [
      "",
      `${getRandomNoun()}`,
      `${getRandomNoun()}, ${
        getRandomNoun()
      }`,
    ];
    return getRandomItem(parameters);
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["$"];
    const options = [
      `[${Elixir.getRandomParametersSet()}]`,
      "array()",
      `array(${Elixir.getRandomParametersSet()})`,
      `$this->${getRandomVerb()}`,
      `$this->${getRandomVerb()}(${Elixir.getRandomParametersSet()})`,
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
      `var_dump(${Elixir.getRandomConsoleLog()}); die();`,
      Elixir.getRandomVariableDeclaration(),
    ];
    return getRandomItem(options);
  }
}

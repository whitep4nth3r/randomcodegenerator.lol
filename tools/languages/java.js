import {
  getRandomEntry,
  capitalizeFirstChar,
  getRandomInt,
  getRandomNounCapitalized,
  getRandomVerb,
  getRandomLogLine,
} from "../utils/helpers";

export default class Java {
  static getRandomMethodSignature() {
    return `public void ${getRandomVerb()}${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const types = [
      {
        name: () => "String",
        generator: (_) => `${getRandomLogLine()}`,
      },
      {
        name: () => "int",
        generator: (_) => getRandomInt(0, 666),
      },
      {
        name: () => {
          const randomName = Java.getRandomVariableName();
          return capitalizeFirstChar(randomName);
        },
        generator: (name) => `new ${name}()`,
      },
    ];
    const randomType = getRandomEntry(types);
    const typeName = randomType.name();
    return `${typeName} ${this.getRandomVariableName()} = ${randomType.generator(
      typeName
    )};`;
  }

  static getRandomVariableName() {
    const fragmentCount = getRandomInt(1, 2);
    const fragments = [];
    for (var i = 0; i < fragmentCount; i++) {
      fragments.push(getRandomNounCapitalized());
    }
    const fullName = fragments.join("");
    return capitalizeFirstChar(fullName);
  }

  static getRandomFillerLine() {
    const options = [
      `System.out.println(${getRandomLogLine()});`,
      Java.getRandomVariableDeclaration(),
    ];
    return getRandomEntry(options);
  }
}

import {
  getRandomEntry,
  capitalizeFirstChar,
  getRandomInt,
  getRandomNounCapitalized,
  getRandomVerb,
  getLogLines,
} from "./helpers";

export default class Java {
  static getRandomMethodSignature() {
    return `public void ${getRandomVerb()}${getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const types = [
      {
        name: () => "String",
        generator: (_) => `${Java.getRandomLogMessage()}`,
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
    return `${typeName} ${this.getRandomVariableName()} = ${randomType.generator(typeName)};`;
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

  static getRandomLogMessage() {
    const options = getLogLines();

    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `System.out.println(${Java.getRandomLogMessage()});`,
      Java.getRandomVariableDeclaration(),
    ];
    return getRandomEntry(options);
  }
}

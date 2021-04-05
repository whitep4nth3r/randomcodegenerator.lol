import {
  getRandomEntry,
  capitalizeFirstChar,
  getRandomInt,
  getRandomNounCapitalized,
  getRandomNoun,
  getRandomVerb,
} from "./helpers";

export default class Kotlin {
  static getRandomMethodSignature() {
    const randomNoun = getRandomNounCapitalized();
    
    return `fun ${getRandomVerb()}${
      randomNoun
    }(${this.getRandomTypes().map(p => `${this.getRandomLengthNounChain(3)}: ${p.name()}`).join(", ")})`;
  }

  static getRandomTypes() {
    const paramCount = getRandomInt(0, 3);
    const params = [];
    for (let p = 0; p < paramCount; p++) {
      const randomType = this.getRandomType();
      params.push(randomType);
    }
    return params;
  }

  static getRandomVariableDeclaration() {
    const randomType = this.getRandomType();
    const typeName = randomType.name();
    let typeValue;
    if (getRandomInt(0, 10) > 6) {
      typeValue = this.getRandomFunctionCall()
    } else {
      typeValue = randomType.generator(typeName)
    }
    return `val ${this.getRandomLengthNounChain(3)}: ${typeName} = ${typeValue}`;
  }

  static getRandomType() {
    const types = [
      {
        name: () => "String",
        generator: (_) => `${Kotlin.getRandomLogMessage()}`,
      },
      {
        name: () => "int",
        generator: (_) => Math.floor(Math.random() * 666),
      },
      {
        name: () => {
          const randomName = Kotlin.getRandomLengthNounChain(2);
          return capitalizeFirstChar(randomName);
        },
        generator: (name) => `${name}()`,
      },
    ];
    return getRandomEntry(types);
  }

  static getRandomFunctionCall() {
    return `${this.getRandomLengthNounChain(3)}(${this.getRandomTypes().map(p => p.generator(p.name())).join(", ")})`
  }

  static getRandomLengthNounChain(maxNouns) {
    const fragmentCount = Math.floor(Math.random() * maxNouns);
    const fragments = [getRandomNoun()];
    for (var i = 0; i < fragmentCount; i++) {
      fragments.push(getRandomNounCapitalized());
    }
    return fragments.join("");
  }

  static getRandomLogMessage() {
    const options = [
      '"Goodbye, world!"',
      '"test"',
      '"hello"',
      `"here ${getRandomInt(0, 100)}"`,
      '"should be here"',
      '"some error"',
      'null',
      '"undefined"',
      '"=== DEBUG ==="',
      '"to do"',
      '"asdf"',
      "null",
      '"FIRE"',
      '"schnitzel"',
      '"TODO: refactor this"',
    ];

    return getRandomEntry(options);
  }

  static getRandomFillerLine() {
    const options = [
      `println(${Kotlin.getRandomLogMessage()})`,
      Kotlin.getRandomVariableDeclaration(),
      Kotlin.getRandomFunctionCall()
    ];
    return getRandomEntry(options);
  }
}

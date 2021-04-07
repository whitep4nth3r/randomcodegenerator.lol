import {
  getRandomEntry,
  capitalizeFirstChar,
  getRandomInt,
  getRandomNounCapitalized,
  getRandomNoun,
  getRandomVerb,
  getRandomLogLine,
} from "./helpers";

export default class Kotlin {
  static getRandomMethodSignature() {
    const randomNoun = getRandomNounCapitalized();

    return `fun ${getRandomVerb()}${randomNoun}(${this.getRandomTypes(3)
      .map((p) => `${this.getRandomVariableName(3)}: ${p.name()}`)
      .join(", ")})`;
  }

  static getRandomTypes(maxParamCount) {
    const paramCount = getRandomInt(0, maxParamCount);
    const params = [];
    for (let p = 0; p < paramCount; p++) {
      const randomType = this.getRandomType();
      params.push(randomType);
    }
    return params;
  }

  static getRandomVariableDeclaration(indentLevel) {
    const randomType = this.getRandomType();
    const typeName = randomType.name();
    let typeValue;
    if (getRandomInt(0, 10) > 6) {
      typeValue = this.getRandomFunctionCall(0, 3);
    } else {
      typeValue = randomType.generator(typeName);
    }
    return `${Kotlin.indent(indentLevel)}val ${this.getRandomVariableName(3)}: ${typeName} = ${typeValue}`;
  }

  static getRandomVariableName(maxLength) {
    return this.getRandomLengthNounChain(maxLength);
  }

  static getRandomType() {
    const types = [
      {
        name: () => "String",
        generator: (_) => `${getRandomLogLine()}`,
      },
      {
        name: () => "int",
        generator: (_) => Math.floor(Math.random() * 666),
      },
      {
        name: () => {
          const randomName = this.getRandomVariableName(2);
          return capitalizeFirstChar(randomName);
        },
        generator: (name) => `${name}()`,
      },
    ];
    return getRandomEntry(types);
  }

  static getRandomFunctionCall(indentLevel, maxParamCount) {
    return `${Kotlin.indent(indentLevel)}${this.getRandomVariableName(3)}(${this.getRandomTypes(maxParamCount)
      .map((p) => p.generator(p.name()))
      .join(", ")})`;
  }

  static getRandomLengthNounChain(maxNouns) {
    const fragmentCount = Math.floor(Math.random() * maxNouns);
    const fragments = [getRandomNoun()];
    for (var i = 0; i < fragmentCount; i++) {
      fragments.push(getRandomNounCapitalized());
    }
    return fragments.join("");
  }

  static getRandomLoop(indentLevel) {
    let indent = Kotlin.indent(indentLevel);
    const loopLines = [`${indent}for (${this.getRandomVariableName(1)} in ${this.getRandomFunctionCall(0, 0)}) {`];
    if (indentLevel === 0) {
      indentLevel += 4;
      indent = Kotlin.indent(indentLevel);
    }
    for (let index = 0; index < getRandomInt(0, 3); index++) {
      loopLines.push(this.getRandomFillerLine(indentLevel + 2));
    }
    loopLines.push(`${indent}}`);
    return loopLines.join("\n\r");
  }

  static indent(level) {
    return "".padStart(level || 0, " ")
  }

  static getRandomFillerLine(indentLevel) {
    const options = [
      () => `${Kotlin.indent(indentLevel)}println(${getRandomLogLine()})`,
      () => Kotlin.getRandomVariableDeclaration(indentLevel),
      () => Kotlin.getRandomFunctionCall(indentLevel, 3),
      () => Kotlin.getRandomLoop(indentLevel || 0),
    ];
    return getRandomEntry(options)();
  }
}

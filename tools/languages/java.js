import { Comments, Helpers } from "../utils";

export default class Java {
  static getRandomMethodSignature() {
    return `public void ${Helpers.getRandomVerb()}${Helpers.getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const types = [
      {
        name: () => "String",
        generator: (_) => `${Helpers.getRandomLogLine()}`,
      },
      {
        name: () => "int",
        generator: (_) => Helpers.getRandomInt(0, 666),
      },
      {
        name: () => {
          const randomName = Java.getRandomVariableName();
          return Helpers.capitalizeFirstChar(randomName);
        },
        generator: (name) => `new ${name}()`,
      },
    ];
    const randomType = Helpers.getRandomEntry(types);
    const typeName = randomType.name();
    return `${typeName} ${this.getRandomVariableName()} = ${randomType.generator(
      typeName
    )};`;
  }

  static getRandomVariableName() {
    const fragmentCount = Helpers.getRandomInt(1, 2);
    const fragments = [];
    for (var i = 0; i < fragmentCount; i++) {
      fragments.push(Helpers.getRandomNounCapitalized());
    }
    const fullName = fragments.join("");
    return Helpers.capitalizeFirstChar(fullName);
  }

  static getRandomFillerLine() {
    const options = [
      `System.out.println(${Helpers.getRandomLogLine()});`,
      Java.getRandomVariableDeclaration(),
    ];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines, addComment) {
    const firstLine = `${Java.getRandomMethodSignature()}() {${Helpers.addNewLine()}`;
    let fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    if (addComment) {
      fillerLineQty = fillerLineQty - 1;
      fillerLines.push(Comments.getRandomComment());
    }

    for (let i = 1; i <= fillerLineQty; i++) {
      fillerLines.push(`    ${Java.getRandomFillerLine()}`);
    }

    const lastLine = `${Helpers.addNewLine()}}`;

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

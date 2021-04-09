import { Comments, Helpers } from "../utils";

export default class PHP {
  static getRandomNamespace() {
    return `namespace ${Helpers.getRandomNounCapitalized()}\\${Helpers.getRandomNounCapitalized()};`;
  }

  static getRandomClassName() {
    return `${Helpers.getRandomNounCapitalized()}`;
  }

  static getRandomFunctionKeyword() {
    const starters = ["public", "public static", "private", "protected"];

    return `${Helpers.getRandomEntry(starters)} function`;
  }

  static getRandomFunctionName() {
    return `${Helpers.getRandomVerb()}${Helpers.getRandomVerbCapitalized()}`;
  }

  static getRandomParamtersSet() {
    const paramaters = [
      "",
      `'${Helpers.getRandomNoun()}'`,
      `'${Helpers.getRandomNoun()}', '${Helpers.getRandomNoun()}'`,
    ];
    return `${Helpers.getRandomEntry(paramaters)}`;
  }

  static getRandomParamtersRead() {
    const paramaters = [
      "",
      `$${Helpers.getRandomNoun()}`,
      `$${Helpers.getRandomNoun()}, $${Helpers.getRandomNoun()}`,
    ];
    return Helpers.getRandomEntry(paramaters);
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["$"];
    const options = [
      `[${PHP.getRandomParamtersSet()}]`,
      "array()",
      `array(${PHP.getRandomParamtersSet()})`,
      `$this->${Helpers.getRandomVerb()}`,
      `$this->${Helpers.getRandomVerb()}(${PHP.getRandomParamtersSet()})`,
      `"${Helpers.getRandomVerb()}"`,
    ];

    return `${Helpers.getRandomEntry(
      keyWords
    )}${Helpers.getRandomNoun()} = ${Helpers.getRandomEntry(options)};`;
  }

  static getRandomFillerLine() {
    const options = [
      `var_dump(${Helpers.getRandomLogLine()}); die();`,
      PHP.getRandomVariableDeclaration(),
    ];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines, addComment) {
    let fillerLineQty = lines;
    const firstLine = `<?php ${Helpers.addNewLine(2)}`;
    let namespaceLine = `${PHP.getRandomNamespace()}${Helpers.addNewLine(2)}`;

    let classLine = `class ${PHP.getRandomClassName()} {${Helpers.addNewLine()}`;

    if (addComment) {
      fillerLineQty = fillerLineQty - 1;
      classLine += `${Comments.getRandomComment()}${Helpers.addNewLine()}`;
    }

    let functionLine = `    ${PHP.getRandomFunctionKeyword()} ${PHP.getRandomFunctionName()}(${PHP.getRandomParamtersRead()}) {${Helpers.addNewLine()}`;

    fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    for (let i = 1; i <= fillerLineQty; i++) {
      fillerLines.push(`        ${PHP.getRandomFillerLine()}`);
    }

    let endFunctionLine = `${Helpers.addNewLine()}    }${Helpers.addNewLine()}`;
    const lastLine = `}`;

    return (
      firstLine +
      namespaceLine +
      classLine +
      functionLine +
      fillerLines.join(Helpers.addNewLine()) +
      endFunctionLine +
      lastLine
    );
  }
}

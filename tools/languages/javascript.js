import { Comments, Helpers } from "../utils";

export default class JavaScript {
  static getRandomInitializationVars() {
    return [
      "[]",
      "this",
      "self",
      "0",
      "1",
      "true",
      "false",
      "{}",
      "null",
      "undefined",
    ];
  }

  static getRandomFunctionName() {
    return `${Helpers.getRandomVerb()}${Helpers.getRandomNounCapitalized()}`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "var"];

    return `${Helpers.getRandomEntry(
      keyWords
    )} ${Helpers.getRandomNoun()} = ${Helpers.getRandomEntry(
      JavaScript.getRandomInitializationVars()
    )};`;
  }

  static getRandomFillerLine() {
    const options = [
      `console.${Helpers.getRandomEntry(
        JavaScript.getRandomConsoleLevel()
      )}(${Helpers.getRandomLogLine()});`,
      JavaScript.getRandomVariableDeclaration(),
      `${JavaScript.getRandomFunctionName()}();`,
    ];
    return Helpers.getRandomEntry(options);
  }

  static getRandomReturn() {
    return `    return ${Helpers.getRandomEntry(
      JavaScript.getRandomInitializationVars()
    )};`;
  }

  static getRandomForLoopAsArray() {
    const randomChar = Helpers.getRandomSingleCharacter();
    const randomNoun = Helpers.getRandomNoun();

    return [
      `    for (let ${randomChar} = 0; ${randomChar} <= ${randomNoun}.length; ${randomChar}++) {`,
      `        ${JavaScript.getRandomFunctionName()}(${randomChar})`,
      "    };",
    ];
  }

  static getRandomConsoleLevel() {
    return ["debug", "info", "log", "warning", "error"];
  }

  static generateRandomCode(lines, addComment, includeForLoop) {
    let fillerLines = [];
    const firstLines = [
      (randomFunctionName) => {
        return `function ${randomFunctionName}() {${Helpers.addNewLine()}`;
      },
      (randomFunctionName) => {
        return `const ${randomFunctionName} = () => {${Helpers.addNewLine()}`;
      },
    ];

    const firstLine = Helpers.getRandomEntry(firstLines)(
      JavaScript.getRandomFunctionName()
    );

    // - 3 because we're now adding a firstLine, returnLine and lastLine
    let fillerLineQty = parseInt(lines, 10) - 3;

    if (addComment) {
      fillerLineQty = fillerLineQty - 1;
      fillerLines.push(Comments.getRandomComment());
    }

    // if line length > 7
    if (includeForLoop) {
      // add 2 lines
      fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
      fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);

      // add 3 lines
      const forLoopLines = JavaScript.getRandomForLoopAsArray(); // return array

      fillerLines = [...fillerLines, ...forLoopLines];

      // add the rest
      for (let i = 6; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
      }
    } else {
      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${JavaScript.getRandomFillerLine()}`);
      }
    }

    fillerLines.push(JavaScript.getRandomReturn());

    const lastLine = `${Helpers.addNewLine()}}`;

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

import { Comments, Helpers } from "../utils";
import { singleCharacters } from "../constants";
import JavaScript from "./javascript";

export default class TypeScript extends JavaScript {
  static getRandomProperties() {
    const start = Helpers.getRandomInt(0, singleCharacters.length - 1);
    const end = Helpers.getRandomInt(start + 1, singleCharacters.length);

    return singleCharacters.slice(start, end);
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["let", "const", "var"];

    return `${Helpers.getRandomEntry(
      keyWords
    )} ${Helpers.getRandomNoun()}: any = ${Helpers.getRandomEntry(
      TypeScript.getRandomInitializationVars()
    )};`;
  }

  static getRandomFillerLine() {
    const options = [
      `console.${Helpers.getRandomEntry(
        TypeScript.getRandomConsoleLevel()
      )}(${Helpers.getRandomLogLine()});`,
      TypeScript.getRandomVariableDeclaration(),
      `${TypeScript.getRandomFunctionName()}();`,
    ];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines, addComment, includeForLoop) {
    let fillerLines = [];
    const functionProperties = `${Helpers.getRandomSingleCharacter()}: any, ${Helpers.getRandomSingleCharacter()}: any`;

    const firstTsLines = [
      (randomFunctionName) => {
        return `function ${randomFunctionName}(${functionProperties}): any {${Helpers.addNewLine()}`;
      },
      (randomFunctionName) => {
        return `const ${randomFunctionName} = function (${functionProperties}): any {${Helpers.addNewLine()}`;
      },
    ];

    const firstLine = Helpers.getRandomEntry(firstTsLines)(
      TypeScript.getRandomFunctionName()
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
      fillerLines.push(`    ${TypeScript.getRandomFillerLine()}`);
      fillerLines.push(`    ${TypeScript.getRandomFillerLine()}`);

      // add 3 lines
      const forLoopLines = TypeScript.getRandomForLoopAsArray(); // return array

      fillerLines = [...fillerLines, ...forLoopLines];

      // add the rest
      for (let i = 6; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${TypeScript.getRandomFillerLine()}`);
      }
    } else {
      for (let i = 1; i <= fillerLineQty; i++) {
        fillerLines.push(`    ${TypeScript.getRandomFillerLine()}`);
      }
    }

    fillerLines.push(TypeScript.getRandomReturn());

    const lastLine = `${Helpers.addNewLine()}}`;

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

import { Helpers } from "../utils";

export default class COBOL {
  static randomValue() {
    const options = [
      `${Helpers.getRandomInt(-999999999, 99999999999)}`,
      Helpers.getRandomLogLine(),
      `WS-${Helpers.getRandomVerbUpperCase()}`,
      `WS-${Helpers.getRandomNounUpperCase()}`,
    ];
    return `${Helpers.getRandomEntry(options)}`;
  }

  static getRandomFillerLine() {
    const options = [
      `ADD WS-${Helpers.getRandomNounUpperCase()} WS-${Helpers.getRandomVerbUpperCase()} TO WS-${Helpers.getRandomVerbUpperCase()}.`,
      `ADD ${COBOL.randomValue()} TO WS-${Helpers.getRandomVerbUpperCase()}.`,
      `MOVE ${COBOL.randomValue()} TO WS-${Helpers.getRandomNounUpperCase()}.`,
      `DISPLAY ${COBOL.randomValue()} ${COBOL.randomValue()}.`,
      `SUBTRACT WS-${Helpers.getRandomNounUpperCase()} WS-${Helpers.getRandomVerbUpperCase()} FROM WS-${Helpers.getRandomVerbUpperCase()}.`,
      `MULTIPLY WS-${Helpers.getRandomNounUpperCase()} BY WS-${Helpers.getRandomVerbUpperCase()}.`,
      `DIVIDE ${COBOL.randomValue()} BY ${COBOL.randomValue()} GIVING WS-${Helpers.getRandomVerbUpperCase()} REMAINDER WS-${Helpers.getRandomVerbUpperCase()}.`,
      `COMPUTE WS-${Helpers.getRandomVerbUpperCase()} = (WS-${Helpers.getRandomNounUpperCase()} * WS-${Helpers.getRandomNounUpperCase()}) - (WS-${Helpers.getRandomNounUpperCase()} / WS-${Helpers.getRandomNounUpperCase()}) + WS-${Helpers.getRandomNounUpperCase()}.`,
    ];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines) {
    const firstLine = `PROCEDURE DIVISION.${Helpers.addNewLine()}`;
    const fillerLineQty = parseInt(lines, 10) - 2;

    const fillerLines = Array(fillerLineQty)
      .fill()
      .map(
        (l) =>
          `${Helpers.getIndentation({
            type: "tab",
          })}${COBOL.getRandomFillerLine()}`
      );

    const lastLine = `${Helpers.addNewLine()}STOP RUN.`;

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

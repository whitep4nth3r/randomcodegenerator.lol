import {
  getRandomEntry,
  getRandomInt,
  getRandomNounUpperCase,
  getRandomVerbUpperCase,
  getRandomLogLine,
} from "./helpers";

export default class COBOL {
  static randomValue() {
    const options = [
      `${getRandomInt(-999999999, 99999999999)}`,
      getRandomLogLine(),
      `WS-${getRandomVerbUpperCase()}`,
      `WS-${getRandomNounUpperCase()}`,
    ];
    return `${getRandomEntry(options)}`;
  }

  static getRandomFillerLine() {
    const options = [
      `ADD WS-${getRandomNounUpperCase()} WS-${getRandomVerbUpperCase()} TO WS-${getRandomVerbUpperCase()}.`,
      `ADD ${COBOL.randomValue()} TO WS-${getRandomVerbUpperCase()}.`,
      `MOVE ${COBOL.randomValue()} TO WS-${getRandomNounUpperCase()}.`,
      `DISPLAY ${COBOL.randomValue()} ${COBOL.randomValue()}.`,
      `SUBTRACT WS-${getRandomNounUpperCase()} WS-${getRandomVerbUpperCase()} FROM WS-${getRandomVerbUpperCase()}.`,
      `MULTIPLY WS-${getRandomNounUpperCase()} BY WS-${getRandomVerbUpperCase()}.`,
      `DIVIDE ${COBOL.randomValue()} BY ${COBOL.randomValue()} GIVING WS-${getRandomVerbUpperCase()} REMAINDER WS-${getRandomVerbUpperCase()}.`,
      `COMPUTE WS-${getRandomVerbUpperCase()} = (WS-${getRandomNounUpperCase()} * WS-${getRandomNounUpperCase()}) - (WS-${getRandomNounUpperCase()} / WS-${getRandomNounUpperCase()}) + WS-${getRandomNounUpperCase()}.`,
    ];
    return getRandomEntry(options);
  }
}

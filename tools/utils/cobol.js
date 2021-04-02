import { getRandomInt } from '../RandomCodeGenerator';
import { nouns, verbs } from './words';

export default class COBOL {
    static randomValue() {
        const values = [
            `${getRandomInt(-999999999, 99999999999)}`,
            COBOL.getRandomPrint(),
            `WS-${COBOL.randomVerb()}`,
            `WS-${COBOL.randomNoun()}`,
        ];
        return `${values[Math.floor(Math.random() * values.length)]}`;
    }

    static randomVerb() {
        return verbs[Math.floor(Math.random() * nouns.length)].toUpperCase();
    }

    static randomNoun() {
        return nouns[Math.floor(Math.random() * nouns.length)].toUpperCase();
    }

    static getRandomPrint() {
        const options = [
            '"Goodbye, world!"',
            '"test"',
            '"hello"',
            `"here ${getRandomInt(0, 100)}"`,
            '"should be here"',
            '"some error"',
            '"undefined"',
            '"=== DEBUG ==="',
            '"to do"',
            '"asdf"',
            '"FIRE"',
            '"schnitzel"',
            '"TODO: refactor this"',
        ];

        return options[Math.floor(Math.random() * options.length)];
    }

    static getRandomFillerLine() {
        const options = [
            `ADD WS-${COBOL.randomNoun()} WS-${COBOL.randomVerb()} TO WS-${COBOL.randomVerb()}.`,
            `ADD ${COBOL.randomValue()} TO WS-${COBOL.randomVerb()}.`,
            `MOVE ${COBOL.randomValue()} TO WS-${COBOL.randomNoun()}.`,
            `DISPLAY ${COBOL.randomValue()} ${COBOL.randomValue()}.`,
            `SUBTRACT WS-${COBOL.randomNoun()} WS-${COBOL.randomVerb()} FROM WS-${COBOL.randomVerb()}.`,
            `MULTIPLY WS-${COBOL.randomNoun()} BY WS-${COBOL.randomVerb()}.`,
            `DIVIDE ${COBOL.randomValue()} BY ${COBOL.randomValue()} GIVING WS-${COBOL.randomVerb()} REMAINDER WS-${COBOL.randomVerb()}.`,
            `COMPUTE WS-${COBOL.randomVerb()} = (WS-${COBOL.randomNoun()} * WS-${COBOL.randomNoun()}) - (WS-${COBOL.randomNoun()} / WS-${COBOL.randomNoun()}) + WS-${COBOL.randomNoun()}.`,
        ];
        return options[Math.floor(Math.random() * options.length)];
    }
}

import { getRandomEntry, getRandomNoun, getRandomNounCapitalized, getRandomVerb } from "./helpers";
import { logs } from "../constants";

export default class Swift {
    static getRandomInitializationVars() {
        return ["self", "0", "1", "true", "false", "nil", "\"💩\"", "\"💻\"", "\"🍎\"", "\"🙀\"", "\"🐶\""];
    }

    static getRandomFunctionName() {
        return `${getRandomVerb()}${getRandomNounCapitalized()}()`;
    }

    static getRandomVariableDeclaration() {
        const keyWords = ["let", "var"];

        return `${getRandomEntry(keyWords)} ${getRandomNoun()} = ${getRandomEntry(Swift.getRandomInitializationVars())}`
    }

    static getRandomPrintCall() {
        return `print(${getRandomEntry(logs)})`;
    }

    static getRandomFillerLine() {
        const options = [
            Swift.getRandomVariableDeclaration(),
            Swift.getRandomPrintCall(),
            Swift.getRandomFunctionName()
        ];

        return getRandomEntry(options);
    }
}

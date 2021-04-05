import {
    getRandomEntry,
    getRandomInt,
    getRandomNoun,
    getRandomNounCapitalized,
    getRandomVerb,
  } from "./helpers";

  export default class CPlusPlus {

        static getRandomFunctionName() {
            const keyWords = ["int", "string", "double", "char", "bool"];

            return `${getRandomEntry(keyWords)} ${getRandomVerb()}${getRandomNounCapitalized()}`;
        }

      static getRandomVariableDeclaration() {
        const keyWords = ["int", "string", "double", "char", "bool"];
        const options = ["[]", "this"];
    
        return `${getRandomEntry(keyWords)} ${getRandomNoun()} = ${getRandomEntry(
          options
        )};`;
      }

      static getRandomCLog() {
        const options = [
          '"Goodbye, world!"',
          '"test"',
          '"hello"',
          `"here ${getRandomInt(0, 100)}"`,
          '"should be here"',
          '"some error"',
          "[object Object]",
          '"undefined"',
          '"=== DEBUG ==="',
          '"to do"',
          '"asdf"',
          "NaN",
          '"FIRE"',
          '"schnitzel"',
          '"TODO: refactor this"',
          "***************",
          "Marlon Web says WATERMELOOOONE"
        ];
    
        return getRandomEntry(options);
      }
      static getRandomMethodKeyword() {
        const options = ["abstract", "virtual", "", "override", "static"];
    
        return getRandomEntry(options);
      }
    
      static getRandomFillerLine() {
        const options = [
          `clog << ${CPlusPlus.getRandomCLog()};`,
          CPlusPlus.getRandomVariableDeclaration(),
          `${CPlusPlus.getRandomFunctionName()}();`,
        ];
        return getRandomEntry(options);
      }

  }
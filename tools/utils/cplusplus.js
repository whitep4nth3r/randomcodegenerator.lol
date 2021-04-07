import {
    getRandomEntry,
    getRandomInt,
    getRandomNoun,
    getRandomNounCapitalized,
    getRandomVerb,
    getRandomLogLine,
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
    

      
      static getRandomMethodKeyword() {
        const options = ["abstract", "virtual", "", "override", "static"];
    
        return getRandomEntry(options);
      }
    
      static getRandomFillerLine() {
        const options = [
          `clog << ${getRandomEntry(getRandomLogLine())};`,
          CPlusPlus.getRandomVariableDeclaration(),
          `${CPlusPlus.getRandomFunctionName()}();`,
        ];
        console.log(getRandomEntry(options));
        return getRandomEntry(options);
      }

  }
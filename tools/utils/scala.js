import {
    getRandomEntry,
    getRandomNoun,
    getRandomVerb,
    getLogLines,
  } from "./helpers";
  
  export default class Scala {
    
    static getRandomImport() {
        return `import ${getRandomNoun()}`;
      }

    static getRandomFunctionName() {
      return `${getRandomVerb()}_${getRandomNoun()}`;
    }
  
    static getRandomVariableDeclaration() {
      const keyWords = ["object","case","class","var", "val"];
      const options = [
        `${Scala.getRandomFunctionName()}().expect(${getRandomEntry(
          getLogLines()
        )})`,
        `${Scala.getRandomFunctionName()}()`,
      ];
  
      return `${getRandomEntry(keyWords)} ${getRandomNoun()} = ${getRandomEntry(
        options
      )};`;
    }
  
    static getRandomConsoleLog() {
      const options = getLogLines();
      return getRandomEntry(options);
    }
  
    static getRandomFillerLine() {
      const options = [
        `println("{}", ${Scala.getRandomConsoleLog()});`,
        Scala.getRandomVariableDeclaration(),
        `${Scala.getRandomFunctionName()}();`,
      ];
      return getRandomEntry(options);
    }
  
    static getRandomType() {
      const types = [
        "Any",
        "AnyVal",
        "Char",
        "Boolean",
        "Unit",
        "Byte",
        "Short",
        "Int",
        "Long",
        "Float",
        "Double",
        "Nothing",
        "AnyRef",
        "String",
        "List",
        "Option",
        "Null",
      ];
      return getRandomEntry(types);
    }
  }
  
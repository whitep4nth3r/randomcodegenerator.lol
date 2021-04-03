import { getRandomInt } from "../RandomCodeGenerator";
import { nouns, verbs } from "./words";

export default class VBScript {

  static getRandomFunctionKeyword() {

    const randomStarter = ["Function", "Sub"];

    return `${randomStarter[Math.floor(Math.random() * randomStarter.length)]}`;
  }

  static getRandomFunctionName() {
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${verbs[Math.floor(Math.random() * verbs.length)]}${randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
      }`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["Dim"];
    const varName = nouns[Math.floor(Math.random() * nouns.length)];

    return `${keyWords[Math.floor(Math.random() * keyWords.length)]} ${varName}`;
  }

  static getRandomVariableAssign() {
    const options = [
      `Request.Querystring("${nouns[Math.floor(Math.random() * nouns.length)]}")`,
      `${nouns[Math.floor(Math.random() * nouns.length)]} & "<br>"`,
      `Array(${getRandomInt(0, 100)},${getRandomInt(0, 100)},${getRandomInt(0, 100)})`
    ];
    const varName = nouns[Math.floor(Math.random() * nouns.length)];

    return `${varName} = ${options[Math.floor(Math.random() * options.length)]}`;
  }


  static getRandomConsoleLog() {
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
      'Nothing',
      'Empty'
    ];

    return options[Math.floor(Math.random() * options.length)];
  }

  static getRandomFillerLine() {
    const options = [
      `Response.Write ${VBScript.getRandomConsoleLog()}`,
      VBScript.getRandomVariableDeclaration(),
      VBScript.getRandomVariableAssign(),
      `${VBScript.getRandomFunctionName()}()`,
      `Session.Abandon`,
      `Set ${nouns[Math.floor(Math.random() * nouns.length)]} = CreateObject("CDO.Message")`
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}

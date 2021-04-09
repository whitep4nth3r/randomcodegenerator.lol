import { Comments, Helpers } from "../utils";
import { logs } from "../constants";

export default class Scala {
  
  static getRandomInitializationVars() {
    return ["this", "0", "1", "true", "false", "None", 
    '"💩"', '"💻"', '"💗"','"☕"','"🙀"', '"🐶"','"🐱‍🐉"','"🍺"','"😇"','"🏄"'];
  }

  static getRandomEmoji() {
    const emoji = ['"💗"','"☕"','"🙀"', '"🐶"','"🍺"','"😇"','"🏄"'];

     return Helpers.getRandomEntry(emoji);
  }

  static getRandomFunctionName() {
    return `${Helpers.getRandomVerb()}${Helpers.getRandomNounCapitalized()}()`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["val", "var"];

    return `${Helpers.getRandomEntry(keyWords)} ${Helpers.getRandomNoun()} = ${Helpers.getRandomEntry(
      Scala.getRandomInitializationVars()
    )}`;
  }

  static getRandomPrintCall() {
    return `println(${Helpers.getRandomEntry(logs)})`;
  }

  static getRandomList() {
    //val list = List(1,2,3)
    let list = [];

    for (let i = 0; i < 5; i++)
        list.push(Scala.getRandomEmoji());

    return `val ${Helpers.getRandomNoun()} = List(${list})`;
  }

  static getRandomMap() {
    let list = [];
    for (let i = 0; i < 4; i++){
      list.push(Math.floor(Math.random() * 10) + " -> "+Scala.getRandomEmoji());
    }

    return `val ${Helpers.getRandomNoun()} = Map(${list})`;
  }

  static getRandomImport() {
    
    const list = ["scala.collection._","scala.math._","scala.concurrent","scala.io","scala.sys"];

     return Helpers.getRandomEntry(list);
  }

  static getRandomForEach() {
    
    let list = [];
    let range = Math.floor(Math.random() * 101);
    
    return `(0 to ${range}).foreach(x => println(x * x))`;
  }

  static getRandomFillerLine() {
    const options = [
      Scala.getRandomVariableDeclaration(),
      Scala.getRandomPrintCall(),
      Scala.getRandomFunctionName(),
      Scala.getRandomForEach(),
      Scala.getRandomList(),
      Scala.getRandomMap(),
    ];

    return Helpers.getRandomEntry(options);
  }
  static generateRandomCode(lines) {

    let importLine = `import ${Scala.getRandomImport()} ${"\n"}`;
    const firstLine = `def ${Scala.getRandomFunctionName()} =${Helpers.addNewLine()}`;
    let fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    for (let i = 0; i < fillerLineQty; i++) {
      fillerLines.push(`   ${Scala.getRandomFillerLine()}`);
    }

    const lastLine = `${Helpers.addNewLine()}`;

    return importLine + firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}
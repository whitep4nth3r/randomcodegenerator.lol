import { getRandomEntry, getRandomNoun, getRandomNounCapitalized, getRandomVerb } from "../utils/helpers";
import { logs } from "../constants";

export default class Scala {
  
  static getRandomInitializationVars() {
    return ["this", "0", "1", "true", "false", "None", 
    '"💩"', '"💻"', '"💗"','"☕"','"🙀"', '"🐶"','"🐱‍🐉"','"🍺"','"😇"','"🏄"'];
  }

  static getRandomEmoji() {
    const emoji = ['"💗"','"☕"','"🙀"', '"🐶"','"🍺"','"😇"','"🏄"'];

     return getRandomEntry(emoji);
  }

  static getRandomFunctionName() {
    return `${getRandomVerb()}${getRandomNounCapitalized()}()`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["val", "var"];

    return `${getRandomEntry(keyWords)} ${getRandomNoun()} = ${getRandomEntry(
      Scala.getRandomInitializationVars()
    )}`;
  }

  static getRandomPrintCall() {
    return `println(${getRandomEntry(logs)})`;
  }

  static getRandomList() {
    //val list = List(1,2,3)
    let list = [];

    for (let i = 0; i < 5; i++)
        list.push(Scala.getRandomEmoji());

    return `val ${getRandomNoun()} = List(${list})`;
  }

  static getRandomMap() {
    let list = [];
    for (let i = 0; i < 4; i++){
      list.push(Math.floor(Math.random() * 10) + " -> "+Scala.getRandomEmoji());
    }

    return `val ${getRandomNoun()} = Map(${list})`;
  }

  static getRandomImport() {
    
    const list = ["scala.collection._","scala.math._","scala.concurrent","scala.io","scala.sys"];

     return getRandomEntry(list);
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

    return getRandomEntry(options);
  }
  static generateRandomCode(lines) {
    const firstLine = `func ${Scala.getRandomFunctionName()} {${Helpers.addNewLine()}`;
    let fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    for (let i = 0; i < fillerLineQty; i++) {
      fillerLines.push(`   ${Scala.getRandomFillerLine()}`);
    }

    const lastLine = `${Helpers.addNewLine()}}`;
    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}
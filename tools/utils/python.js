
import { getRandomInt } from "@tools/RandomCodeGenerator";

const verbs = [
  "generate",
  "handle",
  "remove",
  "add",
  "get",
  "initialize",
  "append",
  "set",
  "replace",
  "check",
  "invoke",
  "sort",
  "on",
  "start",
  "stop",
  "delete",
  "change",
  "yeet",
  "scan",
  "concatenate",
  "read",
  "write",
  "fetch",
  "update",
  "dispose",
  "eggcelerate",
  "random",
];
const nouns = [
  "click",
  "object",
  "target",
  "list",
  "element",
  "thing",
  "code",
  "array",
  "number",
  "property",
  "person",
  "user",
  "table",
  "row",
  "port",
  "string",
  "unsafe",
  "algorithm",
  "method",
  "tree",
  `thing${getRandomInt(0, 100)}`,
];

export default class Python {
  static getRandomFunctionName() {
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${verbs[Math.floor(Math.random() * verbs.length)]}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomVariableDeclaration() {
    const options = ["[]", "this", "self", "x + 1"];

    return `${nouns[Math.floor(Math.random() * nouns.length)]} = ${options[Math.floor(Math.random() * options.length)]};`;
  }

  static getRandomPrint() {
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
    ];

    return options[Math.floor(Math.random() * options.length)];
  }

  static getRandomFillerLine() {
    const options = [
      `print(${Python.getRandomPrint()});`,
      Python.getRandomVariableDeclaration(),
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}
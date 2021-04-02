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

export default class PHP {

  static getRandomNamespace() {
    const lowerRandomNoun = nouns[Math.floor(Math.random() * nouns.length)],
          lowerRandomNounTwo = nouns[Math.floor(Math.random() * nouns.length)],
          randomNoun = lowerRandomNoun.charAt(0).toUpperCase() + lowerRandomNoun.substr(1).toLowerCase(),
          randomNounTwo = lowerRandomNounTwo.charAt(0).toUpperCase() + lowerRandomNounTwo.substr(1).toLowerCase();

    return `namespace ${randomNoun}\\${randomNounTwo};`;
  }


  static getRandomClassName() {
    const lowerRandomNoun = nouns[Math.floor(Math.random() * nouns.length)],
          randomNoun = lowerRandomNoun.charAt(0).toUpperCase() + lowerRandomNoun.substr(1).toLowerCase();

    return `${randomNoun}`;
  }

  static getRandomFunctionKeyword() {
    const lowerRandomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    const randomStarter = ['public', 'public static', 'private', 'protected'];

    return `${randomStarter[Math.floor(Math.random() * randomStarter.length)]} function`;
  }

  static getRandomFunctionName() {
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${verbs[Math.floor(Math.random() * verbs.length)]}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomParamtersSet(){
    const paramaters = [
      '',
      `'${nouns[Math.floor(Math.random() * nouns.length)]}'`,
      `'${nouns[Math.floor(Math.random() * nouns.length)]}', '${nouns[Math.floor(Math.random() * nouns.length)]}'`,
    ];
    return `${paramaters[Math.floor(Math.random() * paramaters.length)]}`;
  }

  static getRandomParamtersRead(){
    const paramaters = [
      '',
      `$${nouns[Math.floor(Math.random() * nouns.length)]}`,
      `$${nouns[Math.floor(Math.random() * nouns.length)]}, $${nouns[Math.floor(Math.random() * nouns.length)]}`,
    ];
    return paramaters[Math.floor(Math.random() * paramaters.length)];
  }

  static getRandomVariableDeclaration() {

    const keyWords = ["$"];
    const options = [
        `[${PHP.getRandomParamtersSet()}]`,
        "array()",
        `array(${PHP.getRandomParamtersSet()})`,
        `$this->${verbs[Math.floor(Math.random() * verbs.length)]}`,
        `$this->${verbs[Math.floor(Math.random() * verbs.length)]}(${PHP.getRandomParamtersSet()})`,
        `"${verbs[Math.floor(Math.random() * verbs.length)]}"`
      ];


    return `${keyWords[Math.floor(Math.random() * keyWords.length)]}${
      nouns[Math.floor(Math.random() * nouns.length)]
    } = ${options[Math.floor(Math.random() * options.length)]};`;
  }

  static getRandomConsoleLog() {
    const options = [
      '"Goodbye, world!"',
      '"test"',
      '"hello"',
      `"here ${getRandomInt(0, 100)}"`,
      '"should be here"',
      '"some error"',,
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
      `var_dump(${PHP.getRandomConsoleLog()}); die();`,
      PHP.getRandomVariableDeclaration(),
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}

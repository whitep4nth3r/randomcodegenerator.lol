import { getRandomInt } from "../RandomCodeGenerator";

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

export default class Java {
  static getRandomMethodSignature() {
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `public void ${verbs[Math.floor(Math.random() * verbs.length)]}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomVariableDeclaration() {
    const types = [
      {
        name: () => "String",
        generator: (_) => `${Java.getRandomLogMessage()}`,
      },
      {
        name: () => "int",
        generator: (_) => Math.floor(Math.random() * 666),
      },
      {
        name: () => {
          const randomName = Java.getRandomVariableName();
          return randomName[0].toUpperCase() + randomName.slice(1);
        },
        generator: (name) => `new ${name}()`,
      },
    ];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const typeName = randomType.name();
    return `${typeName} ${this.getRandomVariableName()} = ${randomType.generator(typeName)};`;
  }

  static getRandomVariableName() {
    const fragmentCount = Math.floor(Math.random() * 2) + 1;
    const fragments = [];
    for (var i = 0; i < fragmentCount; i++) {
      const noun = this.randomNoun();
      fragments.push(noun[0].toUpperCase() + noun.slice(1));
    }
    const fullName = fragments.join("");
    return fullName[0].toLowerCase() + fullName.slice(1);
  }

  static randomNoun() {
    return nouns[Math.floor(Math.random() * nouns.length)];
  }

  static getRandomLogMessage() {
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
      "null",
      '"FIRE"',
      '"schnitzel"',
      '"TODO: refactor this"',
    ];

    return options[Math.floor(Math.random() * options.length)];
  }

  static getRandomFillerLine() {
    const options = [
      `System.out.println(${Java.getRandomLogMessage()});`,
      Java.getRandomVariableDeclaration(),
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}

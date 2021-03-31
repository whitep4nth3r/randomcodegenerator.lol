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
    "throw",
  ];
  const nouns = [
    "click",
    "object",
    "sender",
    "list",
    "element",
    "thing",
    "code",
    "array",
    "int",
    "prop",
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

  const types = [
      "void",
      "Task",
      "string",
      "int",
      "bool",
      "double",
      "decimal",
      "char",
      "long",
      "float",
      "signed",
      "unsigned",
      "Task<string>",
      "Task<int>",
      "Task<NullReferenceException>",
  ];

  const modifier = [
      "public",
      "private"
  ];

export default class CSharp {

    static getRandomModifier() {
        var randomModifier = modifier[Math.floor(Math.random() * modifier.length)];
        console.log(`Random Modifier: ${randomModifier}`);
        return `${randomModifier}`;
    }

    static getRandomReturnType() {
        const randomReturnType = types[Math.floor(Math.random() * types.length)];
        return `${randomReturnType}`;
    }

    static getRandomMethodName() {
        const randomModifier = this.getRandomModifier();
        const randomReturnType = this.getRandomReturnType();
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        return `${randomModifier} ${randomReturnType} ${verbs[Math.floor(Math.random() * verbs.length)]}${
          randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
        }`;
    }

    static getRandomVariableDeclaration() {
        const keyWords = ["var", "const", "string", "bool", "int", "double", "char"];
        const options = ["null", "this"];
    
        return `${keyWords[Math.floor(Math.random() * keyWords.length)]} ${
          nouns[Math.floor(Math.random() * nouns.length)]
        } = ${options[Math.floor(Math.random() * options.length)]};`;
      }

      static getRandomConsoleWriteLine() {
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
          '"NullReferenceException"',
          '"ArgumentReferenceException"'
        ];
        return options[Math.floor(Math.random() * options.length)];
    }

    static getRandomFillerLine() {
        const options = [
          `Console.WriteLine(${CSharp.getRandomConsoleWriteLine()});`,
          CSharp.getRandomVariableDeclaration(),
        ];
        return options[Math.floor(Math.random() * options.length)];
      }
}
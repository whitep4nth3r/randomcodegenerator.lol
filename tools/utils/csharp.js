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

export default class CSharp {

  static getRandomMethodName() {
	const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${
	  randomVerb.charAt(0).toUpperCase() + randomVerb.slice(1)
	}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["int", "string", "double", "float", "decimal", "bool"];

	var keyWord = keyWords[Math.floor(Math.random() * keyWords.length)];
    return `${keyWord} ${
      nouns[Math.floor(Math.random() * nouns.length)]
    };`;
  }

  static getRandomNewVariableDeclaration() {
    const keyWords = ["ArrayList", "List<string>", "HashTable", "Dictionary<int, string>", "Queue", "StringBuilder"];

	var keyWord = keyWords[Math.floor(Math.random() * keyWords.length)];
    return `${keyWord} ${
      nouns[Math.floor(Math.random() * nouns.length)]
    } = new ${keyWord}();`;
  }

  static getRandomMethodKeyword() {
    const options = [
		'abstract',
		'virtual',
		'',
		'override',
		'static',
	  ];
  
	  return options[Math.floor(Math.random() * options.length)];
	}

  static getRandomAccessModifier() {
	const options = [
		'public',
		'private',
		'',
		'protected',
		`internal`,
		];
	
		return options[Math.floor(Math.random() * options.length)];
	}
	
  static getRandomDebugWriteLine() {
    const options = [
      '"Goodbye, world!"',
      '"test"',
      '"hello"',
      `"here ${getRandomInt(0, 100)}"`,
      '"should be here"',
      '"here be dragons"',
      '"some error"',
      '"Would expect null"',
      '"=== DEBUG ==="',
      '"to do"',
      '"asdf"',
      '"FIRE"',
      '"schnitzel"',
	  '"Marlon Webb says WATERMELON!"',
      '"TODO: refactor this"',
    ];

    return options[Math.floor(Math.random() * options.length)];
  }

  static getRandomMethodCall() {
	  return `${this.getRandomMethodName()}();`;
  }

  static getRandomFillerLine() {
    const options = [
      `Debug.WriteLine(${CSharp.getRandomDebugWriteLine()});`,
      CSharp.getRandomVariableDeclaration(),
      CSharp.getRandomNewVariableDeclaration(),
	  CSharp.getRandomMethodCall(),
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}

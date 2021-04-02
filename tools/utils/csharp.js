import { getRandomInt, getRandomItem, getRandomNoun, getRandomVerb } from "./random";

export default class CSharp {

  static getRandomMethodName() {
	const randomVerb = getRandomVerb();
    const randomNoun = getRandomNoun();

    return `${
	  randomVerb.charAt(0).toUpperCase() + randomVerb.slice(1)
	}${
      randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
    }`;
  }

  static getRandomVariableDeclaration() {
    const keyWords = ["int", "string", "double", "float", "decimal", "bool"];

	var keyWord = getRandomItem(keyWords);
    return `${keyWord} ${
      getRandomNoun()
    };`;
  }

  static getRandomNewVariableDeclaration() {
    const keyWords = ["ArrayList", "List<string>", "HashTable", "Dictionary<int, string>", "Queue", "StringBuilder"];

	var keyWord = getRandomItem(keyWords);
    return `${keyWord} ${
      getRandomNoun()
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
  
	  return getRandomItem(options);
	}

  static getRandomAccessModifier() {
	const options = [
		'public',
		'private',
		'',
		'protected',
		`internal`,
		];
	
		return getRandomItem(options);
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

    return getRandomItem(options);
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
    return getRandomItem(options);
  }
}

import { getRandomInt } from "../RandomCodeGenerator";

const verbs = [
    "Show",
    "Get",
    "Remove",
    "Add",
    "Set",
    "Replace",
    "Invoke",
    "Start",
    "Stop",
    "Delete",
    "Yeet",
    "Read",
    "Write",
    "Fetch",
    "Update",
    "Dispose",
    "Dismount",
    "Restart",
    "Eggcelerate",
    "Throw",
  ];
  const nouns = [
    "Click",
    "Object",
    "Sender",
    "List",
    "Element",
    "Thing",
    "Code",
    "Array",
    "Int",
    "Prop",
    "Person",
    "User",
    "Table",
    "Row",
    "Port",
    "String",
    "Unsafe",
    "Algorithm",
    "Method",
    "Tree",
    "Calendar",
    `thing${getRandomInt(0, 100)}`,
  ];

  export default class Powershell {
      
    static getRandomFunctionName() {
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        return `${verbs[Math.floor(Math.random() * verbs.length)]}-${
          randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)
        }`;
    }

    static getRandomVariableDeclaration() {
        
        const options = ["[]", "this"];
    
        return `$${
          nouns[Math.floor(Math.random() * nouns.length)]
        } = ${options[Math.floor(Math.random() * options.length)]};`;
    }

    static getRandomWriteHost() {
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
          `Write-Host ${Powershell.getRandomWriteHost()};`,
          Powershell.getRandomVariableDeclaration(),
        ];
        return options[Math.floor(Math.random() * options.length)];
      }
  }
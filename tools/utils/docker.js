import { getRandomInt, getRandomEntry } from "../RandomCodeGenerator";

const imageNames = [
  "ubuntu",
  "centos",
  "nginx",
  "redis",
  "node",
  "postgres",
  "mysql",
  "mongo",
  "debian",
  "jenkins",
];

const commandGenerators = [
  {
    "command" : "COPY",
    "parameters": () => getRandomEntry(nouns) + getRandomEntry(fileSuffixes) + " " + getRandomEntry(nouns) + "/"
  },
  {
    "command" : "ADD",
    "parameters": () => getRandomEntry(nouns) + getRandomEntry(fileSuffixes) + " " + getRandomEntry(nouns) + "/"
  },
  {
    "command" : "EXPOSE",
    "parameters": () => getRandomInt(80, 8080)
  },
  {
    "command" : "RUN",
    "parameters": () => Docker.getRandomPath() + getRandomEntry(verbs)
  },
];

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
const fileSuffixes = [
  ".sh",
  ".txt",
  ".xml",
  ".png"
];

export default class Docker {
  

  static getRandomCommand() {
    
    const randomCommand = getRandomEntry(commandGenerators);
    const commandName = randomCommand.command;
    return `${commandName} ${randomCommand.parameters()}`;
  }

  static getRandomPath() {
    const options = [
      "/bin/",
      "/sbin/",
      "/lib/",
      "/opt/",
    ];
    return getRandomEntry(options);
  }

  static getRandomVariableName() {
    const fragmentCount = getRandomInt(1, 3);
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

  static getRandomComment() {
    return "# " + getRandomEntry(verbs) + " " + getRandomEntry(nouns);
  }

  static randomPreamble() {
    return "FROM " + this.getRandomImageName() + "\n\r";
  }

  static getRandomImageName() {
    return getRandomEntry(imageNames);
  }

  static randomPostamble() {
    return "\n\rCMD bin";
  }

  static getRandomFillerLine() {
    const options = [
      Docker.getRandomComment(),
      Docker.getRandomCommand(),
    ];
    return getRandomEntry(options);
  }
}

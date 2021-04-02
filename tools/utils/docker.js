import { getRandomInt, getRandomEntry } from "../RandomCodeGenerator";
import { nouns, verbs } from "./words";

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

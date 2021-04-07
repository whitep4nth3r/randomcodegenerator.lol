import {
  getRandomInt,
  getRandomEntry,
  getRandomNoun,
  getRandomVerb,
  getRandomSuffix,
} from "./helpers";

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
    command: "COPY",
    parameters: () => getRandomNoun() + getRandomSuffix() + " " + getRandomNoun() + "/",
  },
  {
    command: "ADD",
    parameters: () => getRandomNoun() + getRandomSuffix() + " " + getRandomNoun() + "/",
  },
  {
    command: "EXPOSE",
    parameters: () => getRandomInt(80, 8080),
  },
  {
    command: "RUN",
    parameters: () => Docker.getRandomPath() + getRandomVerb(),
  },
];

const fileSuffixes = [".sh", ".txt", ".xml", ".png"];

export default class Docker {
  static getRandomCommand() {
    const randomCommand = getRandomEntry(commandGenerators);
    const commandName = randomCommand.command;
    return `${commandName} ${randomCommand.parameters()}`;
  }

  static getRandomPath() {
    const options = ["/bin/", "/sbin/", "/lib/", "/opt/"];
    return getRandomEntry(options);
  }

  static getRandomComment() {
    return "# " + getRandomVerb() + " " + getRandomNoun();
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
    const options = [Docker.getRandomComment(), Docker.getRandomCommand()];
    return getRandomEntry(options);
  }
}

import { Helpers } from "../utils";

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
    parameters: () =>
      Helpers.getRandomNoun() +
      Helpers.getRandomSuffix() +
      " " +
      Helpers.getRandomNoun() +
      "/",
  },
  {
    command: "ADD",
    parameters: () =>
      Helpers.getRandomNoun() +
      Helpers.getRandomSuffix() +
      " " +
      Helpers.getRandomNoun() +
      "/",
  },
  {
    command: "EXPOSE",
    parameters: () => Helpers.getRandomInt(80, 8080),
  },
  {
    command: "RUN",
    parameters: () => Docker.getRandomPath() + Helpers.getRandomVerb(),
  },
];

const fileSuffixes = [".sh", ".txt", ".xml", ".png"];

export default class Docker {
  static getRandomCommand() {
    const randomCommand = Helpers.getRandomEntry(commandGenerators);
    const commandName = randomCommand.command;
    return `${commandName} ${randomCommand.parameters()}`;
  }

  static getRandomPath() {
    const options = ["/bin/", "/sbin/", "/lib/", "/opt/"];
    return Helpers.getRandomEntry(options);
  }

  static getRandomComment() {
    return "# " + Helpers.getRandomVerb() + " " + Helpers.getRandomNoun();
  }

  static randomPreamble() {
    return "FROM " + this.getRandomImageName() + Helpers.addNewLine();
  }

  static getRandomImageName() {
    return Helpers.getRandomEntry(imageNames);
  }

  static randomPostamble() {
    return `${Helpers.addNewLine()}CMD bin`;
  }

  static getRandomFillerLine() {
    const options = [Docker.getRandomComment(), Docker.getRandomCommand()];
    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines) {
    const firstLine = Docker.randomPreamble();
    const fillerLineQty = parseInt(lines, 10) - 2;

    const fillerLines = Array(fillerLineQty)
      .fill()
      .map((l) => Docker.getRandomFillerLine());

    const lastLine = Docker.randomPostamble();

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

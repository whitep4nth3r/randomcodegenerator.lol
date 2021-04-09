import { getRandomEntry } from "./helpers";

export default class Comments {
  static options = [
    {
      name: "TODO",
      messages: [
        "Finish this function",
        "Finish this thing?",
        "Ask a Sr dev what to do here",
        "Finish this on Monday!",
        "Remove this code before I commit this bit of code",
      ],
    },
    {
      name: "FIXME",
      messages: [
        "Fix this!",
        "Google how to fix this later",
        "Bug a Sr dev to fix this",
        "Add one to this",
        "H E L P",
        "Figure out the type",
        "For some reason this is causing the code below to error out?",
        "Works on my machine",
      ],
    },
    {
      name: "REVIEW",
      messages: [
        "Get Sr dev to look at this on Monday",
        "Bring this up in stand up",
        "Please let me know if there is a better way to write this code",
        "Does this look right?",
        "I tried....",
      ],
    },
    {
      name: "DONOTTOUCH",
      messages: [
        "This has to be here otherwise prod db goes down!!!!!",
        "No idea why this is here but when we remove it the code will break :/",
        "I'll fix this one day...",
        "This hack is here for the one client.",
      ],
    },
  ];

  static getRandomComment(languageOverride = "default") {
    const index = Math.floor(Math.random() * this.options.length);
    const commentName = this.options[index].name;
    const commentMessage = getRandomEntry(this.options[index].messages);
    let comment = "";

    switch (languageOverride) {
      case "powershell":
        comment = `    <# ${commentName}: ${commentMessage} #>`;
        break;
      case "vba":
        comment = `    ' ${this.options[index].name}: ${
          this.options[index].messages[
            Math.floor(Math.random() * this.options[index].messages.length)
          ]
        } `;
        break;
      default:
        comment = `    /* ${commentName}: ${commentMessage} */`;
        break;
    }

    return comment;
  }
}

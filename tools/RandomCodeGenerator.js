import { Languages } from "@tools/Constants";

export function generateRandomCode(language, lines) {
  switch (language) {
    case "js":
      return "test js";
    case "css":
      return "test css";
    default:
      return "lol";
  }
}

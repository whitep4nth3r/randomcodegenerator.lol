import * as CONSTANTS from "../constants";

export function addNewLine(numberOfLines = 1) {
  return "\n".repeat(numberOfLines);
}

export function capitalizeFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getContributors(lang) {
  return CONSTANTS.Contributors[lang];
}

export function getIndentation({ type = "spaces", level = 1 }) {
  if (type === "tabs") {
    return "\t".repeat(level);
  }
  return "  ".repeat(level);
}

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function getRandomEntry(array) {
  return array[getRandomInt(0, array.length - 1)];
}

export function getRandomLang() {
  const languages = Object.keys(CONSTANTS.Languages);
  return getRandomEntry(languages);
}

export function getRandomNoun() {
  return getRandomEntry(CONSTANTS.nouns);
}

export function getRandomVerb() {
  return getRandomEntry(CONSTANTS.verbs);
}

export function getRandomSuffix() {
  return getRandomEntry(CONSTANTS.suffixes);
}

export function getRandomNounCapitalized() {
  return capitalizeFirstChar(getRandomNoun());
}

export function getRandomVerbCapitalized() {
  return capitalizeFirstChar(getRandomVerb());
}

export function getRandomNounUpperCase() {
  return getRandomNoun().toUpperCase();
}

export function getRandomVerbUpperCase() {
  return getRandomVerb().toUpperCase();
}

export function getRandomLogLine() {
  return getRandomEntry(CONSTANTS.logs);
}

export function getRandomSingleCharacter(except = "") {
  let singleCharacter;

  do {
    singleCharacter = getRandomEntry(CONSTANTS.singleCharacters);
  } while (singleCharacter === except);

  return singleCharacter;
}

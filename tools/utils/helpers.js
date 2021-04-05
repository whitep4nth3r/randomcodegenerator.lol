import { Languages } from "../RandomCodeGenerator";
import { nouns, verbs } from "./words";

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function getRandomEntry(array) {
  return array[getRandomInt(0, array.length - 1)];
}

export function getRandomLang() {
  const languages = Object.keys(Languages);
  return getRandomEntry(languages);
}

export function capitalizeFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getRandomNoun() {
  return getRandomEntry(nouns);
}

export function getRandomVerb() {
  return getRandomEntry(verbs);
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

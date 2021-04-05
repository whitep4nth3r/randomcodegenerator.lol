import { Languages } from "../RandomCodeGenerator";
import { nouns, verbs } from "./words";

export const Contributors = {
  css: ["whitep4nth3r"],
  cobol: ["canhorn"],
  csharp: ["lucecarter", "rickvdbosch"],
  fsharp: ["mrange"],
  docker: ["jwalter"],
  php: ["dr_dinomight"],
  java: ["jwalter"],
  js: ["whitep4nth3r", "lukeocodes", "negue", "isabellabrookes"],
  kotlin: ["jwalter"],
  python: ["mistatwist", "callticketron"],
  powershell: ["lucecarter"],
};

export function getContributors(lang) {
  return Contributors[lang];
}

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

export function getLogLines() {
  return [
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
    '"Marlon Webb says WATERMELON!"',
  ];
}

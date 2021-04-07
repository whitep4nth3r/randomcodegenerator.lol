import { getRandomInt } from "../utils/helpers";

const logs = [
  '"Goodbye, world!"',
  '"test"',
  '"hello"',
  `"here ${getRandomInt(0, 100)}"`,
  '"should be here"',
  '"some error"',
  "**********",
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

export default logs;

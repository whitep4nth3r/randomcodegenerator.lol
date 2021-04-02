import { getRandomInt } from "../RandomCodeGenerator";

export default class Css {
  // box-shadow props
  // pseudo stuff

  // font style props
  // font family

  // list-style

  // text-align

  //border style

  static getRandomPositionRule() {
    const positionValues = ["relative", "absolute", "fixed", "sticky"];

    return `position: ${positionValues[Math.floor(Math.random() * positionValues.length)]}`;
  }

  static getRandomDisplayRule() {
    const displayValues = [
      "block",
      "inline-block",
      "inline",
      "flex",
      "grid",
      "inline-grid",
      "inline-flex",
      "flow-root",
    ];

    return `display: ${displayValues[Math.floor(Math.random() * displayValues.length)]}`;
  }

  static getRandomZIndexRule() {
    return `z-index: ${getRandomInt(-1, 999999)}`;
  }

  static getRandomColorProp() {
    const colorProps = [
      "color",
      "background-color",
      "border-color",
      "border-bottom-color",
      "border-top-color",
      "border-left-color",
      "border-right-color",
    ];
    return colorProps[Math.floor(Math.random() * colorProps.length)];
  }

  static getRandomHexCode() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  static getRandomUnitProp() {
    const unitProps = [
      "padding",
      "padding-bottom",
      "padding-top",
      "padding-left",
      "padding-right",
      "margin",
      "margin-bottom",
      "margin-top",
      "margin-left",
      "margin-right",
      "line-height",
      "font-size",
      "min-width",
      "width",
      "height",
      "max-width",
      "border-width",
      "border-bottom-width",
      "border-top-width",
      "border-left-width",
      "border-right-width",
    ];
    return unitProps[Math.floor(Math.random() * unitProps.length)];
  }

  static getRandomUnit() {
    const cssUnits = ["px", "rem", "em", "ch", "vw", "vh"];
    return cssUnits[Math.floor(Math.random() * cssUnits.length)];
  }

  static getRandomUnitRule() {
    return `${Css.getRandomUnitProp()}: ${getRandomInt(0, 500)}${Css.getRandomUnit()}`;
  }

  static getRandomColorRule() {
    return `${Css.getRandomColorProp()}: ${Css.getRandomHexCode()}`;
  }

  static getRandomClassName() {
    // to do
    // add more options
    // sometimes, add a camelCased item
    // sometimes add a --modifier
    const options = [
      "button",
      "input",
      "container",
      "element",
      "tab",
      "nav",
      "class",
      "this",
      "random",
    ];

    return `${options[Math.floor(Math.random() * options.length)]}__${
      options[Math.floor(Math.random() * options.length)]
    }`;
  }
}

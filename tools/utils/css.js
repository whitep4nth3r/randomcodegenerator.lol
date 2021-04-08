import { getRandomEntry, getRandomInt } from "./helpers";

export default class Css {
  // box-shadow props
  // pseudo stuff

  // font style props
  // font family
  
  static getRandomListStyle() {
    const listStyleValues = [
      "disc",
      "circle",
      "square",
      "decimal",
      "decimal-leading-zero",
      "lower-roman",
      "upper-roman",
      "lower-greek",
      "lower-latin",
      "upper-latin",
      "armenian",
      "georgian",
      "lower-alpha",
      "upper-alpha",
      "none",
    ];

    return `list-style: ${getRandomEntry(listStyleValues)}`;
  }

  static getRandomBorderStyle() {
    const borderStyleValues = [
      "none",
      "hidden",
      "dotted",
      "dashed",
      "solid",
      "double",
      "groove",
      "ridge",
      "inset",
      "outset",
      "initial",
      "inherit",
    ];

    return `border-style: ${getRandomEntry(borderStyleValues)}`;
  }

  static getRandomTextAlign() {
    const alignValues = ["left", "right", "center", "justify", "initial", "inherit"];

    return `text-align: ${getRandomEntry(alignValues)}`;
  }

  static getRandomPositionRule() {
    const positionValues = ["relative", "absolute", "fixed", "sticky"];

    return `position: ${getRandomEntry(positionValues)}`;
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

    return `display: ${getRandomEntry(displayValues)}`;
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
    return getRandomEntry(colorProps);
  }

  static getRandomHexCode() {
    return `#${getRandomInt(0, 16777215).toString(16)}`;
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
    return getRandomEntry(unitProps);
  }

  static getRandomUnit() {
    const cssUnits = ["px", "rem", "em", "ch", "vw", "vh"];
    return getRandomEntry(cssUnits);
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

    return `${getRandomEntry(options)}__${getRandomEntry(options)}`;
  }
  
  static getRandomJustify() {
    const justifyValues = [
      "flex-start",
      "flex-end",
      "center",
      "space-around",
      "space-between",
      "space-evenly",
      "initial",
      "inherit",
    ];

    return `justify-content: ${getRandomEntry(justifyValues)}`;
  }
  
  static getRandomAlign() {
    const alignTypes = ["items", "content", "self"];
    const alignValues = [
      "stretch",
      "center",
      "flex-start",
      "flex-end",
      "baseline",
      "initial",
      "inherit",
    ];

    return `align-${getRandomEntry(alignTypes)}: ${getRandomEntry(
      alignValues
    )}`;
  }
}

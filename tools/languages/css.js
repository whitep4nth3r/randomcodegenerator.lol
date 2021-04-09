import { Comments, Helpers } from "../utils";

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

    return `list-style: ${Helpers.getRandomEntry(listStyleValues)}`;
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

    return `border-style: ${Helpers.getRandomEntry(borderStyleValues)}`;
  }

  static getRandomTextAlign() {
    const alignValues = [
      "left",
      "right",
      "center",
      "justify",
      "initial",
      "inherit",
    ];

    return `text-align: ${Helpers.getRandomEntry(alignValues)}`;
  }

  static getRandomPositionRule() {
    const positionValues = ["relative", "absolute", "fixed", "sticky"];

    return `position: ${Helpers.getRandomEntry(positionValues)}`;
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

    return `display: ${Helpers.getRandomEntry(displayValues)}`;
  }

  static getRandomZIndexRule() {
    return `z-index: ${Helpers.getRandomInt(-1, 999999)}`;
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
    return Helpers.getRandomEntry(colorProps);
  }

  static getRandomHexCode() {
    return `#${Helpers.getRandomInt(0, 16777215).toString(16)}`;
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
    return Helpers.getRandomEntry(unitProps);
  }

  static getRandomUnit() {
    const cssUnits = ["px", "rem", "em", "ch", "vw", "vh"];
    return Helpers.getRandomEntry(cssUnits);
  }

  static getRandomUnitRule() {
    return `${Css.getRandomUnitProp()}: ${Helpers.getRandomInt(
      0,
      500
    )}${Css.getRandomUnit()}`;
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

    return `${Helpers.getRandomEntry(options)}__${Helpers.getRandomEntry(
      options
    )}`;
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

    return `justify-content: ${Helpers.getRandomEntry(justifyValues)}`;
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

    return `align-${Helpers.getRandomEntry(
      alignTypes
    )}: ${Helpers.getRandomEntry(alignValues)}`;
  }

  static getRandomCursorStyle() {
    const cursorStyleValues = [
      "alias",
      "all-scroll",
      "auto",
      "cell",
      "col-resize",
      "copy",
      "crosshair",
      "default",
      "e-resize",
      "grab",
      "grabbing",
      "help",
      "move",
      "n-resize",
      "ne-resize",
      "nw-resize",
      "no-drop",
      "none",
      "not-allowed",
      "pointer",
      "progress",
      "row-resize",
      "text",
      "vertical-text",
      "wait",
      "zoom-in",
      "zoom-out",
      "initial",
    ];

    return `cursor: ${Helpers.getRandomEntry(cursorStyleValues)}`;
  }

  static getRandomFlexDirection() {
    const flexDirectionValues = [
      "row",
      "column",
      "row-reverse",
      "column-reverse",
      "initial",
      "inherit",
    ];

    return `flex-direction: ${Helpers.getRandomEntry(flexDirectionValues)}`;
  }

  static getRandomBackgroundPostition() {
    const backgroundPositionValues = [
      "left top",
      "left center",
      "left bottom",
      "right top",
      "right center",
      "right bottom",
      "center top",
      "center center",
      "center bottom",
    ];

    return `background-position: ${Helpers.getRandomEntry(
      backgroundPositionValues
    )}`;
  }

  static getRandomBorderCollapse() {
    const borderCollapseValues = ["seperate", "collapse", "initial", "inherit"];

    return `border-collapse: ${Helpers.getRandomEntry(borderCollapseValues)}`;
  }

  static getRandomBackgroundRepeat() {
    const backgroundRepeatValues = [
      "repeat",
      "repeat-x",
      "repeat-y",
      "no-repeat",
      "space",
      "round",
      "initial",
      "inherit",
    ];

    return `background-repeat: ${Helpers.getRandomEntry(
      backgroundRepeatValues
    )}`;
  }

  static getRandomBoxShadow() {
    let boxShadowValue = `${Helpers.getRandomInt(
      1,
      10
    )}${this.getRandomUnit()} ${Helpers.getRandomInt(
      1,
      10
    )}${this.getRandomUnit()} `;

    // 50% chance to have spread and blur
    if (Helpers.getRandomInt(1, 100) <= 50) {
      boxShadowValue += `${Helpers.getRandomInt(
        2,
        20
      )}${this.getRandomUnit()} ${Helpers.getRandomInt(
        2,
        20
      )}${this.getRandomUnit()} `;
    }

    return `box-shadow: ${boxShadowValue + `${this.getRandomHexCode()}`}`;
  }

  static generateRandomCode(lines, addComment) {
    const firstLine = `.${Css.getRandomClassName()} {${Helpers.addNewLine()}`;
    let fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    if (addComment) {
      fillerLineQty = fillerLineQty - 1;
      fillerLines.push(Comments.getRandomComment());
    }

    const lineOptions = [
      Css.getRandomUnitRule(),
      Css.getRandomColorRule(),
      Css.getRandomDisplayRule(),
      Css.getRandomZIndexRule(),
      Css.getRandomPositionRule(),
      Css.getRandomBorderStyle(),
      Css.getRandomTextAlign(),
      Css.getRandomListStyle(),
      Css.getRandomJustify(),
      Css.getRandomAlign(),
      Css.getRandomCursorStyle(),
      Css.getRandomFlexDirection(),
      Css.getRandomBackgroundPostition(),
      Css.getRandomBorderCollapse(),
      Css.getRandomBackgroundRepeat(),
      Css.getRandomBoxShadow(),
    ];

    fillerLines = fillerLines.concat(
      Array(fillerLineQty)
        .fill()
        .map(
          (l) =>
            `${Helpers.getIndentation(2)}${Helpers.getRandomEntry(
              lineOptions
            )};`
        )
    );

    const lastLine = `${Helpers.addNewLine()}}`;
    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

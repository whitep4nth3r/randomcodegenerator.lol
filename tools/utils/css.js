export default class Css {
  // do unit props
  // do colour props
  // box-shadow props
  // pseudo stuff
  // font style props
  // position props

  static getRandomProp() {
    // add a lot more options
    const cssProps = [
      "margin-bottom",
      "margin-top",
      "margin-left",
      "margin-right",
      "line-height",
      "font-size",
      "max-width",
    ];
    return cssProps[Math.floor(Math.random() * cssProps.length)];
  }

  static getRandomUnit() {
    const cssUnits = ["px", "rem", "em", "ch"];
    return cssUnits[Math.floor(Math.random() * cssUnits.length)];
  }

  static getRandomClassName() {
    // to do
    // add more options
    // sometimes, add a camelCased item
    // sometimes add a --modifier
    const options = ["button", "input", "container", "element", "tab", "nav", "class"];

    return `${options[Math.floor(Math.random() * options.length)]}__${
      options[Math.floor(Math.random() * options.length)]
    }`;
  }
}

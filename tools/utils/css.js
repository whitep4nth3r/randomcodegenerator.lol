export default class Css {
  static getRandomProp() {
    // add a lot more options
    const cssProps = ["margin-bottom", "margin-top", "margin-left", "margin-right"];
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
    const options = ["button", "input", "container", "element", "tab", "nav"];

    return `${options[Math.floor(Math.random() * options.length)]}__${
      options[Math.floor(Math.random() * options.length)]
    }`;
  }
}

import { AjnaElement } from "ajna";

export default class Icon extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Icon.html")
  }

}
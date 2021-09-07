import { AjnaElement } from "ajna";

export default class Button extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Button.html")
  }

}
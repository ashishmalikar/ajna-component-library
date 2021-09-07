import { AjnaElement } from "ajna";

export default class Input extends AjnaElement {

  constructor () {
    super();
  }

  template () {
    return require("./Input.html")
  }

}